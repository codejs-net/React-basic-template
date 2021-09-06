import React from 'react';
import {Paper,Grid,Container} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "../components/Card/Card";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Container>
                
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="h2">
            Election Commission Srilanka
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card
            image="/image1.jpg"
            title="Project-1"
            topic="Project-1"
            content="There is one limitation with the negative margin we use to implement the spacing between items"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image2.jpg"
            title="Project-2"
            topic="Project-2"
            content="There is one limitation with the negative margin we use to implement the spacing between items"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image3.jpg"
            title="Project-3"
            topic="Project-3"
            content="There is one limitation with the negative margin we use to implement the spacing between items"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image4.jpg"
            title="Project-4"
            topic="Project-4"
            content="There is one limitation with the negative margin we use to implement the spacing between items"
            />
          </Paper>
        </Grid>
        </Grid>
        </Container>
       
      </div>
    );
}

export default Home;