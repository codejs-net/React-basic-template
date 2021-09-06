import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import useStyles from "./style";
import HomeIcon from '@material-ui/icons/Home';

export default function AppBarHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
        <div className={classes.toolbarIcon}>
          <Avatar className={classes.logo} src="/logo.png"/>
          <h2 spacing={1}>CODE-JS&nbsp;</h2>
          <Button color="primary" variant="outlined" href="/"><HomeIcon/>Home</Button>
        </div>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
