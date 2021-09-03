import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: "437px",
    backgroundColor: "white",
    border: "1px solid rgba(81, 92, 111, 0.16)",
    borderRadius: "5px",
    height: "40px",
    fontFamily: "Poppins",
    fontSize: "15px",
    color: "#4D4D4D",
    "&::placeholder": {
      color: "#DBDBDB",
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: "normal",
    },
    "&:focus": {
      border: "1px solid #089BAB",
    },
    "&:hover": {
      border: "1px solid #089BAB",
    },
  },

  formFieldLabel: {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0em",
    color: "#4D4D4D",
    paddingBottom: "8px",
  },
});

export default useStyles;
