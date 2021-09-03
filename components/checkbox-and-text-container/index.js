import React from "react";
import useStyles from "./style";

const CheckboxAndTextContainer = ({ children, isLogin = false }) => {
  const styles = useStyles(isLogin);
  return (
    <div className={styles.checkboxAndTextContainer}>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default CheckboxAndTextContainer;
