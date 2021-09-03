import React from "react";
import useStyles from "./style";

const ActivationContainer = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.activation}>{children}</div>;
};

export default ActivationContainer;
