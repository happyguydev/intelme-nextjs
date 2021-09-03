import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import Image from 'next/image';
import useStyles from './style';

const FormField = ({
  value,
  handleChange,
  label,
  disabled = false,
  type = undefined,
  error = undefined,
  helperText = undefined,
  FormHelperTextProps = undefined,
}) => {
  const styles = useStyles();
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Typography
        classes={{
          root: styles.formFieldLabel,
        }}
      >
        {label}
      </Typography>
      <TextField
        classes={{
          root: styles.input,
        }}
        type={showPassword && isPassword ? 'text' : type}
        size="small"
        value={value}
        disabled={disabled}
        InputLabelProps={{
          shrink: false,
          style: {
            color: '#DBDBDB',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontWeight: 'normal',
          },
        }}
        onChange={handleChange}
        placeholder={label}
        error={error}
        helperText={helperText}
        FormHelperTextProps={FormHelperTextProps}
        label={isPassword && !value ? '••••••••' : null}
        variant="outlined"
        InputProps={{
          endAdornment: isPassword ? (
            showPassword ? (
              <div
                className="cursor-pointer flex align-middle justify-center"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Image
                  src="/frontend-dev/icons/eye-open.svg"
                  height="20px"
                  width="20px"
                />
              </div>
            ) : (
              <div
                className="cursor-pointer flex align-middle justify-center"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Image
                  src="/frontend-dev/icons/password-eye.svg"
                  width="20px"
                  height="20px"
                />
              </div>
            )
          ) : null,
        }}
      />
    </div>
  );
};

export default FormField;
