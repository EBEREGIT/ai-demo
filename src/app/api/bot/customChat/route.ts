import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatOpenAI } from "@langchain/openai";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

export async function POST(request: Request) {
  const { input, url } = await request.json();

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const embeddings = new OpenAIEmbeddings();
  const splitter = new RecursiveCharacterTextSplitter();
  const loader = new CheerioWebBaseLoader(url);

  try {
    const docs = await loader.load();
    const splitDocs = await splitter.splitDocuments(docs);

    const vectorStore = await MemoryVectorStore.fromDocuments(
      splitDocs,
      embeddings
    );

    const prompt = ChatPromptTemplate.fromTemplate(`
        Answer the following question based on the provided documents. 
        
        You can assist a human to reason on the document. 
        Always wait for the first message to come from the user, and based on the language they speak, you should always adapt accordingly. 
        
        Provide all the necessary information
        :
    
        <context>
        {context}
        </context>
        
        Question: {input}`);
    const documentChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
    });
    const retriever = vectorStore.asRetriever();
    const retrievalChain = await createRetrievalChain({
      combineDocsChain: documentChain,
      retriever,
    });
    const output = await retrievalChain.invoke({
      input,
    });
    return new Response(
      JSON.stringify({ output: { role: "assistant", content: output.answer } }),
      {
        status: 201,
        statusText: "Successful",
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "failed", error }), {
      status: 500,
      statusText: "Failure",
    });
  }
}
