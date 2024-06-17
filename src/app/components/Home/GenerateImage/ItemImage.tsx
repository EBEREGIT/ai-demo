"use client";

import { Box } from "@mui/material";
import React, { ReactNode, useContext } from "react";
import Modal from "../../general/modal";
import Item from "../components/item";
import { ThemeContext } from "@/app/context/Theme";

export default function ItemImage(props: {
  content: string | ReactNode;
  sx: object;
  description: string;
}) {
  const { content, sx, description } = props;
  const { mode } = useContext(ThemeContext);

  return (
    <Box
      component={"aside"}
      sx={{ my: 2.5, overflow: "scroll", p: 2, borderRadius: 4, ...sx }}
    >
      <Modal
        buttonName={<ItemImageContent content={content as string} />}
        modalTitle={"Preview"}
        modalBody={
          <>
            <ItemImageContent content={content as string} />
            <Item content={description} textColor={mode ? "white" : "black"} />
          </>
        }
      />
    </Box>
  );
}

function ItemImageContent(props: { content: string; sx?: object }) {
  const { content, sx } = props;

  return (
    <Box
      component={"img"}
      src={content}
      sx={{ maxWidth: "100%", ...sx }}
      alt="Preview"
    />
  );
}
