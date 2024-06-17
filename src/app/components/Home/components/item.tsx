"use client";

import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Markdown from "react-markdown";

export default function Item(props: {
  content: ReactNode | string;
  sx?: object;
  textColor?: string;
}) {
  const { content, sx, textColor } = props;

  return (
    <Box
      component={"aside"}
      sx={{ my: 2.5, overflow: "scroll", py: 2, px: 5, borderRadius: 4, ...sx }}
    >
      <Typography
        lineHeight={2}
        variant="body1"
        color={textColor ? textColor : "white"}
      >
        {typeof content !== "string" ? (
          content
        ) : (
          <Markdown>{content as string}</Markdown>
        )}
      </Typography>
    </Box>
  );
}
