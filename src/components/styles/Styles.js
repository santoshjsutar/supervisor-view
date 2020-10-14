import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pageNums: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "10px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  gearGrid: {
    paddingTop: "5px",
    paddingLeft: "10px",
  },
  m0p0: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  fullWidth: {
    width: "100%",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  gridRow: {
    width: "100%",
    display: "grid",
    background: "#FFFFFF",
    gridAutoFlow: "column",
  },
  paginationFlex: {
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: "8px 0 8px 0",
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    boxSizing: "border-box",
  },
  boldTypography: {
    fontWeight: "bold",
  },
  mutedTypos: {
    textAlign: "center",
    paddingTop: "10px",
  },
  dropdown: {
    display: "grid",
    alignItems: "center",
    alignText: "center",
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(0),
  },
  mr8px: {
    marginRight: "8px",
  },
  mr20px: {
    marginRight: "25px",
  },
  select: {
    height: "30px",
    width: "60px",
    fontSize: "12px",
  },
  gotoInupt: {
    height: "30px",
    width: "40px",
    fontSize: "12px",
  },
}));
