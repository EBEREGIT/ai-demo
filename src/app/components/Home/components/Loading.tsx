import React, { useContext } from "react";
import Item from "./item";
import { Skeleton } from "@mui/material";
import { ThemeContext } from "@/app/context/Theme";
import { Variable } from "@/app/context/Variable";

export default function Loading(props: { sx?: object }) {
  const { sx } = props;
  const { theme } = useContext(ThemeContext);
  const { feedback } = useContext(Variable);

  return (
    <Item
      content={
        <>
          {feedback}

          {feedback === "Processing Image..." ? (
            <Skeleton
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 4,
                mt: 2,
              }}
              variant="rectangular"
              width={"100%"}
              height={100}
            />
          ) : (
            ""
          )}
        </>
      }
      sx={{ ...sx }}
    />
  );
}
