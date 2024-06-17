"use client";

import { Variable } from "@/app/context/Variable";
import React, { useContext } from "react";
import Item from "../components/item";
import { General } from "@/app/context/General";
import Conversation from "../components/conversation";
import { Box } from "@mui/material";
import ItemImage from "../components/ItemImage";
import { isUrl } from "@/utils/helpers";

export default function AIChat() {
  const { chats } = useContext(Variable);
  const { assistantMessageStyle, userMessageStyle } = useContext(General);

  return (
    <Conversation
      conversations={
        <Box component={"main"}>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <>
                  {/* show text */}
                  {chat && !isUrl(chat.content) ? (
                    <Item
                      key={index}
                      content={chat.content}
                      sx={
                        chat.role === "user"
                          ? userMessageStyle
                          : assistantMessageStyle
                      }
                    />
                  ) : (
                    ""
                  )}

                  {/* show image */}
                  {chat && isUrl(chat.content) ? (
                    <ItemImage
                      key={index}
                      content={chat.content}
                      sx={assistantMessageStyle}
                    />
                  ) : (
                    ""
                  )}

                  {/* show error */}
                  {chat && !chat.content ? (
                    <Item
                      key={index + chat.content}
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
