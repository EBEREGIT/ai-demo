// external imports
import { useContext } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

// internal imports
import IconBtn from "./iconBtn";
import { ThemeContext } from "@/app/context/Theme";

export default function ModeToggle() {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <IconBtn
      handleClick={() => {
        mode ? setMode(false) : setMode(true);
      }}
      label={
        mode ? (
          <LightMode sx={{ color: "white" }} />
        ) : (
          <DarkMode sx={{ color: "white" }} />
        )
      }
    />
  );
}
