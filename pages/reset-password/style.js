import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  passwordRequirement: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    color: "#858383",
    paddingBottom: "8px",
  },
  passwordRequirementContainer: {
    width: "437px",
    color: "#4D4D4D",
    marginTop: "32px",
  },
  helperText: {
    backgroundColor: "#edf5f6",
    margin: 0,
    paddingLeft: "14px",
    paddingTop: "4px",
    paddingRight: "14px",
  },
  passwordGuidelines: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    color: "#4D4D4D",
  },
});
