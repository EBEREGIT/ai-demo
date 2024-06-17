/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
// external imports
import { IconButton } from "@mui/material";

export default function IconBtn(props: {
  handleClick: Function;
  label: any;
}) {
  const { handleClick, label } = props;

  return (
    <IconButton
      size="large"
      edge="end"
      color="inherit"
      aria-label={label}
      onClick={() => handleClick()}
    >
      {label}
    </IconButton>
  );
}
