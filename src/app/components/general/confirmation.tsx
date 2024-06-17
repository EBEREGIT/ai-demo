import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import Btn from "./btn";
import { ThemeContext } from "@/app/context/Theme";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Confirmation(props: {
  btnSX?: object;
  title: React.ReactNode;
  body: React.ReactNode;
  handleConfirmation: Function;
  variant?: "contained" | "outlined" | "text";
  href?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  iconL?: React.ReactNode;
  target?: "_blank";
}) {
  const {
    btnSX,
    title,
    body,
    handleConfirmation,
    variant,
    href,
    label,
    icon,
    iconL,
  } = props;
  const [open, setOpen] = React.useState(false);
  const { mode } = React.useContext(ThemeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Btn
        label={label}
        icon={icon}
        iconL={iconL}
        variant={variant}
        href={href}
        sx={{ ...btnSX }}
        handleClick={handleClickOpen}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>{body}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Btn
            variant="contained"
            autoFocus
            handleClick={handleClose}
            label={"No"}
          />
          <Btn
            variant="outlined"
            autoFocus
            handleClick={() => {
              handleConfirmation();
              handleClose();
            }}
            label={"Yes"}
            sx={{
              border: mode ? "1px solid white" : "",
              color: mode ? "white" : "",
            }}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
