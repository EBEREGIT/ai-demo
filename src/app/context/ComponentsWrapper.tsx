"use client";

import { ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

type ContextProvidersProps = {
  children: React.ReactNode;
};

export default function ComponentsWrapper({ children }: ContextProvidersProps) {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
