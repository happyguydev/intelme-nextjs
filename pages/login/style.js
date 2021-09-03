import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  helperText: {
    backgroundColor: "#edf5f6",
    margin: 0,
    paddingLeft: "14px",
    paddingTop: "4px",
    paddingRight: "14px",
  },
  forgotPassword: {
    width: "107px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#089BAB",
    cursor: "pointer",
    "&:hover": {
      color: "#017d8a",
      textDecoration: "none",
    },
  },
  rememberMe: {
    width: "90px",
    height: "16px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#4D4D4D",
  },
});
