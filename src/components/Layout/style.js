
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  appBarSpacer: theme.spacing(2),
  content: {
    flexGrow: 1,
    minHeight: "90vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    minHeight: "95vh",
    display: "flex",
    flexDirection: "column",
    // width:"100%"
  },

}));
