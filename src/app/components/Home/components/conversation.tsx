"use client";

import { Variable } from "@/app/context/Variable";
import { Box, Paper } from "@mui/material";
import React, { ReactNode, useContext, useEffect, useRef } from "react";
import Loading from "../components/Loading";
import { General } from "@/app/context/General";
import { ThemeContext } from "@/app/context/Theme";

export default function Conversation(props: { conversations: ReactNode }) {
  const { conversations } = props;
  const { chats, isLoading } = useContext(Variable);
  const { assistantMessageStyle } = useContext(General);
  const { theme, mode } = useContext(ThemeContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chats]);

  return (
    <Paper
      sx={{ height: "auto", backgroundColor: mode ? "" : theme.gray.bg1 }}
      elevation={0}
      square
    >
      <Box component={"div"} sx={{ py: 10, width: "100%", px: 2.5 }}>
        {conversations}

        {isLoading ? <Loading sx={assistantMessageStyle} /> : ""}
      </Box>
      <div ref={ref} />
    </Paper>
  );
}
