"use client";

import { Box } from "@mui/material";
import React, { useContext } from "react";
import Btn from "../../general/btn";
import { Variable } from "@/app/context/Variable";
import { ThemeContext } from "@/app/context/Theme";
import Input from "../../Form/input";
import { isUrl } from "@/utils/helpers";

export default function Intro() {
  const { setType, setChats, url, setUrl } = useContext(Variable);
  const { theme } = useContext(ThemeContext);

  const style = {
    my: 2.5,
    borderColor: theme.gray.bg2,
    backgroundColor: theme.gray.bg2,
    px: 10,
    py: 2,
  };

  return (
    <Box
      component={"section"}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        width: "50%",
        m: "auto",
      }}
    >
      <Input
        value={url}
        placeholder={"Enter a Website URL"}
        type={"url"}
        name={"url"}
        setter={setUrl}
      />

      {isUrl(url) ? (
        <Btn
          handleClick={() => {
            setType("CHAT");
            setChats([]);
          }}
          label={"Start Chat"}
          variant="contained"
          sx={{
            ...style,
          }}
        />
      ) : (
        ""
      )}
    </Box>
  );
}
