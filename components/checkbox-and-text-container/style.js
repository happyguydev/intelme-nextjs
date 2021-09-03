import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  checkboxAndTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#4d4d4d",
    fontSize: "12px",
    width: (isLogin) => !isLogin && "437px",
  },
  childrenContainer: {
    width: (isLogin) => !isLogin && "437px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default useStyles;
