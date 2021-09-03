import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./style";

const SubmitButton = ({ children, disabled, handleClick }) => {
  const styles = useStyles();
  return (
    <Button
      classes={{
        root: styles.submitButton,
        label: styles.buttonLabel,
      }}
      disabled={disabled}
      onClick={handleClick}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
