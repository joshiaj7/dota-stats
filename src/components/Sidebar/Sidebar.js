import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  link: {
    color: 'white',
    background: '#073642',
  },
});

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Link to="/" className={classes.link}>
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link to="/teams" className={classes.link}>
          Teams
        </Link>
      </Grid>
      <Grid item>
        <Link to="/players" className={classes.link}>
          Players
        </Link>
      </Grid>
      <Grid item>
        <Link to="/matches" className={classes.link}>
          Matches
        </Link>
      </Grid>
    </Grid>
  );
}
