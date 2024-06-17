// external imports
import { Box, Breakpoint, Slide } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { ReactElement, ReactNode, useContext, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconBtn from "./iconBtn";
import Btn from "./btn";
import { Cancel } from "@mui/icons-material";
import { ThemeContext } from "../../context/Theme";

// transition function
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal(props: {
  icon?: ReactElement;
  iconL?: ReactElement;
  buttonName?: ReactNode;
  modalTitle?: string | ReactNode;
  modalBody?: string | ReactNode;
  modalFooter?: string | ReactNode;
  showModalFooter?: boolean;
  maxWidth?: Breakpoint;
  btnSX?: object;
  fullScreenSize?: number | Breakpoint;
  modalTitleStyle?: object;
  cancelStyles?: object;
}) {
  const {
    icon,
    buttonName,
    modalTitle,
    modalBody,
    modalFooter,
    showModalFooter,
    maxWidth,
    btnSX,
    iconL,
    fullScreenSize,
    modalTitleStyle,
    cancelStyles,
  } = props;
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const muiTheme = useTheme();
  const fullScreen = useMediaQuery(
    muiTheme.breakpoints.down(fullScreenSize ? fullScreenSize : "sm")
  );

  return (
    <Box>
      {buttonName ? (
        <Btn
          label={buttonName}
          icon={icon}
          iconL={iconL}
          handleClick={() => handleOpen()}
          sx={{ ...btnSX }}
        />
      ) : (
        <IconBtn handleClick={handleOpen} label={icon} />
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={maxWidth}
        TransitionComponent={Transition}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* title */}
        <DialogTitle
          id="scroll-dialog-title"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box component={"aside"} sx={modalTitleStyle}>
            {modalTitle}
          </Box>

          <Box
            component={"aside"}
            sx={{
              display: modalTitle ? "" : "flex",
              flexDirection: "row-reverse",
            }}
          >
            <IconBtn
              handleClick={() => handleClose()}
              label={<Cancel sx={{ ...cancelStyles }} />}
            />
          </Box>
        </DialogTitle>

        {/* body */}
        <DialogContent>{modalBody}</DialogContent>

        {/* footer */}
        {showModalFooter ? <DialogActions>{modalFooter}</DialogActions> : ""}
      </Dialog>
    </Box>
  );
}
