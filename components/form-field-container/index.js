import React from "react";
import useStyles from "./style";

const FormFieldContainer = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.formFieldContainer}>{children}</div>;
};

export default FormFieldContainer;
