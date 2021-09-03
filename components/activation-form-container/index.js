import React from "react";
import useStyles from "./style";

const ActivationFormContainer = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.formContainer}>{children}</div>;
};

export default ActivationFormContainer;
