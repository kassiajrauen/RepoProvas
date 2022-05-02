import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SxProps,
  Theme,
} from "@mui/material";
import React, { useState, ChangeEvent } from "react";

interface Props {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme> | undefined;
}

function PasswordInput({ sx, label, value, onChange }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  function handleIconClick() {
    setShowPassword(!showPassword);
  }

  return (
    <FormControl sx={sx} variant="outlined">
      <InputLabel htmlFor="outlined-adorment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adorment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleIconClick}
              onMouseDown={handleIconClick}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}

export default PasswordInput;
