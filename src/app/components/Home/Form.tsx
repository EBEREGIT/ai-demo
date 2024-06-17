"use client";

import React, { useContext } from "react";
import Input from "../Form/input";
import { Variable } from "@/app/context/Variable";
import { Box } from "@mui/material";
import { Bot } from "@/app/context/Bot";
import SendBtn from "./SendBtn";

export default function Form() {
  const { message, setMessage, chats, setChats } = useContext(Variable);
  const { customChat } = useContext(Bot);

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e ? e.preventDefault() : "";

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    customChat();
  };

  return (
    <Box
      component={"form"}
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "inherit",
      }}
    >
      <Input
        value={message}
        placeholder={"Enter Your message and hit Enter"}
        type={"text"}
        name={"message"}
        setter={setMessage}
        endAdornment={<SendBtn handleSubmit={handleSubmit} />}
      />
    </Box>
  );
}
