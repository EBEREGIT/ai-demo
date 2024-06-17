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
            Custom Demo Bot
          </Typography>
        </Box>

        <ModeToggle />
      </Box>

      <Box
        component={"section"}
        sx={{
          backgroundColor: mode
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
          textAlign: "center",
          py: 1,
        }}
      >
        <Box
          component={"a"}
          target="_blank"
          href="https://linktr.ee/ebereplenty"
          sx={{
            textDecoration: "none",
            color: theme.gray.bg1,
          }}
        >
          Created by{" "}
          <Box
            component={"span"}
            sx={{
              fontStyle: "italic",
            }}
          >
            Njoku S. E.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
