import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    background: '#073642',
    width: '100%',
    color: '#ffffff',
    minHeight: 800,
  },
  container: {
    minHeight: 800,
    width: '100%',
  },
  icon: {
    margin: 10,
  },
});

export default function LoadingPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CircularProgress className={classes.icon} />
          <Typography variant="h5"> Fetching Data </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
