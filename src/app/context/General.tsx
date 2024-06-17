"use client";

import { createContext, useContext, useEffect } from "react";
import { ThemeContext } from "./Theme";

type GeneralType = {
  userMessageStyle: object;
  assistantMessageStyle: object;
};

type GeneralProviderProps = {
  children: React.ReactNode;
};

export const General = createContext({} as GeneralType);

export default function GeneralProvider({ children }: GeneralProviderProps) {
  const { theme } = useContext(ThemeContext);

  const userMessageStyle = {
    backgroundColor: theme.gray.bg2,
    flexDirection: "row-reverse",
    display: "flex",
    ml: "20%",
  };

  const assistantMessageStyle = {
    backgroundColor: theme.palette.primary.main,
    mr: "20%",
    border: `1px solid ${theme.gray.bg2}`
  };

  return (
    <General.Provider
      value={{
        userMessageStyle,
        assistantMessageStyle,
      }}
    >
      {children}
    </General.Provider>
  );
}
