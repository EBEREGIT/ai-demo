"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type VariableType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  chats: any[];
  setChats: Dispatch<SetStateAction<any[]>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  summary: string;
  setSummary: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  feedback: string;
  setFeedback: Dispatch<SetStateAction<string>>;
  projectDescription: string;
  setProjectDescription: Dispatch<SetStateAction<string>>;
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
};

type VariableProviderProps = {
  children: React.ReactNode;
};

export const Variable = createContext({} as VariableType);

export default function VariableProvider({ children }: VariableProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [summary, setSummary] = useState("");
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feedback, setFeedback] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [url, setUrl] = useState("");

  return (
    <Variable.Provider
      value={{
        isLoading,
        setIsLoading,
        chats,
        setChats,
        message,
        setMessage,
        type,
        setType,
        summary,
        setSummary,
        language,
        setLanguage,
        title,
        setTitle,
        content,
        setContent,
        feedback,
        setFeedback,
        projectDescription,
        setProjectDescription,
        url,
        setUrl,
      }}
    >
      {children}
    </Variable.Provider>
  );
}
