"use client";

import { createContext, useContext } from "react";
import { Variable } from "./Variable";

type BotType = {
  customChat: () => void;
};

type BotProviderProps = {
  children: React.ReactNode;
};

export const Bot = createContext({} as BotType);

export default function BotProvider({ children }: BotProviderProps) {
  const { message, setChats, chats, setMessage, setIsLoading, setFeedback } =
    useContext(Variable);

  const reset = () => {
    setMessage("");
    setIsLoading(false);
    setFeedback("");
  };

  const customChat = async () => {
    if (!message) return;
    let msgs = chats;

    setIsLoading(true);
    setFeedback("Typing...");

    try {
      const query = await fetch(`api/bot/customChat`, {
        method: "post",
        body: JSON.stringify({ input: message }),
      });

      const result = await query.json();

      msgs.push(result.output);
      setChats(msgs);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <Bot.Provider
      value={{
        customChat,
      }}
    >
      {children}
    </Bot.Provider>
  );
}
