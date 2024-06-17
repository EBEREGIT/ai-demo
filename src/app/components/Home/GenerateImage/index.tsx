"use client";

import { Variable } from "@/app/context/Variable";
import React, { useContext } from "react";
import Item from "../components/item";
import ItemImage from "./ItemImage";
import { General } from "@/app/context/General";
import Conversation from "../components/conversation";
import { Box } from "@mui/material";

export default function GenerateImage() {
  const { chats } = useContext(Variable);
  const { assistantMessageStyle, userMessageStyle } = useContext(General);

  return (
    <Conversation
      conversations={
        <Box component={"main"}>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <>
                  {chat.role === "user" ? (
                    <Item
                      key={index}
                      content={chat.content}
                      sx={userMessageStyle}
                    />
                  ) : (
                    <ItemImage
                      key={index}
                      content={chat.content}
                      sx={assistantMessageStyle}
                      description={chat.description}
                    />
                  )}

                  {/* generated image description */}
                  {chat.description ? (
                    <Item
                      key={index + chat.description}
                      content={`IMAGE DESCRIPTION: ${chat.description}`}
                      sx={assistantMessageStyle}
                    />
                  ) : (
                    ""
                  )}

                  {!chat.content ? (
                    <Item
                      key={index + chat.description}
                      content={"I encountered an error. Try Again Later..."}
                      sx={assistantMessageStyle}
                    />
                  ) : (
                    ""
                  )}
                </>
              ))
            : ""}
        </Box>
      }
    />
  );
}
