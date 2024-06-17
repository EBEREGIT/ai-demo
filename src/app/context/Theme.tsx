"use client";

import { Theme, createTheme } from "@mui/material";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

declare module "@mui/material/styles" {
  interface Theme {
    gray: {
      bg1: string;
      bg2: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    gray: {
      bg1: string;
      bg2: string;
    };
  }
}

type ThemeContextType = {
  mode: string | boolean;
  setMode: Dispatch<SetStateAction<string | boolean>>;
  theme: Theme;
  isGreaterThanMD: boolean;
  isGreaterThanSM: boolean;
  isLessThanMD: boolean;
  isLessThanSM: boolean;
  isLessThanLG: boolean;
  isGreaterThanLG: boolean;
  isLessThanXL: boolean;
  isGreaterThanXL: boolean;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<string | boolean>(prefersDarkMode);

  useEffect(() => {
    setMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#1B1A55",
      },

      mode: mode ? "dark" : "light",
    },
    gray: {
      bg1: "#DFE2FE",
      bg2: "#535C91",
    },
  });

  const isGreaterThanXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isLessThanXL = useMediaQuery(theme.breakpoints.down("xl"));
  const isGreaterThanLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isLessThanLG = useMediaQuery(theme.breakpoints.down("lg"));
  const isGreaterThanMD = useMediaQuery(theme.breakpoints.up("md"));
  const isLessThanMD = useMediaQuery(theme.breakpoints.down("md"));
  const isLessThanSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isGreaterThanSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        theme,
        isGreaterThanMD,
        isGreaterThanSM,
        isLessThanMD,
        isLessThanSM,
        isGreaterThanLG,
        isLessThanLG,
        isGreaterThanXL,
        isLessThanXL,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
