
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems:"left",
  },
  appbar:{
    backgroundColor:theme.palette.background.deepPurpleBg,
  },
  logo:{
    width:45,
    height:45,
    marginRight:"15px",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

  },
  button:{
    color:"#91f299",
  }

}));
