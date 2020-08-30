import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#073642',
    marginBottom: 15,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} m={2}>
      <Toolbar>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h4">Dota Stats</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
