import React from "react";
import useStyles from "./style";

const PageContainer = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.pageContainer}>{children}</div>;
};

export default PageContainer;
