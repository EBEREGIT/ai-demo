"use client";

import { Paper } from "@mui/material";
import Heading from "./heading";
import Form from "./Form";
import AIChat from "./Chat";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/Theme";
import { Variable } from "@/app/context/Variable";
import Intro from "./Intro";

export default function LandingPage() {
  const { theme, mode } = useContext(ThemeContext);
  const { type } = useContext(Variable);

  return (
    <>
      <Paper
        elevation={0}
        square
        sx={{ height: "100vh", backgroundColor: mode ? "" : theme.gray.bg1 }}
      >
        <Heading />

        {type === "CHAT" ? (
          <>
            <AIChat />
            <Form />
          </>
        ) : (
          <Intro />
        )}
      </Paper>
    </>
  );
}
