import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const loadingStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
    width: '100%',
    color: theme.palette.text.primary,
    minHeight: 800,
  },
  container: {
    minHeight: 800,
    width: '100%',
  },
  icon: {
    margin: 10,
  },
  text: {
    letterSpacing: '2px',
  },
}));

export default function LoadingPage() {
  const classes = loadingStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CircularProgress className={classes.icon} />
          <Typography variant="h5" className={classes.text}>
            Fetching Data
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
