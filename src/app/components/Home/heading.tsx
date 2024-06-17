"use client";

import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import ModeToggle from "../general/modeToggle";
import { ThemeContext } from "@/app/context/Theme";

export default function Heading() {
  const { theme, mode } = useContext(ThemeContext);

  return (
    <Box
      component={"div"}
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2.5,
          backgroundColor: mode ? theme.palette.primary.main : theme.gray.bg2,
          borderBottom: `1px solid ${theme.gray.bg2}`,
        }}
      >
        <Box component={"a"} href="/">
          <Typography variant="body1" color={"white"}>
            AI Demo Bot
          </Typography>
        </Box>

        <ModeToggle />
      </Box>
    </Box>
  );
}
