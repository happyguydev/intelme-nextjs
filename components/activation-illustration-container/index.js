import React from "react";
import useStyles from "./style";

const ActivationIllustrationContainer = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.activationIllustrationContainer}>{children}</div>
  );
};

export default ActivationIllustrationContainer;
