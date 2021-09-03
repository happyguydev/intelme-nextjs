import React from "react";
import useStyles from "./style";

const FormHeader = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.formHeader}>{children}</div>;
};

export default FormHeader;
