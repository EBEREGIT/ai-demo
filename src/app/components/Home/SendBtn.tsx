import React, { useContext } from "react";
import Btn from "../general/btn";
import { Send } from "@mui/icons-material";
import { ThemeContext } from "@/app/context/Theme";

export default function SendBtn(props: {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}) {
  const { handleSubmit } = props;
  const { theme, mode } = useContext(ThemeContext);

  return (
    <Btn
      icon={
        <Send
          sx={{
            color: mode
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
          }}
        />
      }
      handleClick={() => handleSubmit()}
    />
  );
}
