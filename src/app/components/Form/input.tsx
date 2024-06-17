/* eslint-disable @typescript-eslint/ban-types */
// external import
import { Box, InputAdornment, TextField } from "@mui/material";
import { ReactNode, useContext } from "react";
import { Variable } from "@/app/context/Variable";

export default function Input(props: {
  value: number | string | undefined;
  placeholder: string;
  type: string;
  name: string;
  setter: Function;
  error?: boolean;
  helperText?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  sx?: object;
}) {
  const { isLoading } = useContext(Variable);
  const {
    placeholder,
    setter,
    value,
    type,
    register,
    name,
    error,
    helperText,
    startAdornment,
    endAdornment,
    disabled,
    sx,
  } = props;

  return (
    <TextField
      sx={{ ...sx }}
      autoFocus
      disabled={disabled || isLoading}
      id={name}
      fullWidth
      name={name}
      error={error}
      {...(register ? { ...register(name) } : "")}
      helperText={helperText}
      color="primary"
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setter(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ cursor: "pointer" }}>
            {startAdornment}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ cursor: "pointer" }}>
            {endAdornment}
          </InputAdornment>
        ),
      }}
    />
  );
}
