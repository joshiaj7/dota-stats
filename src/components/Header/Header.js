import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.component,
    marginBottom: 15,
  },
  typo: {
    color: theme.palette.text.primary,
  },
}));

export default function Header({ changeTheme, darkMode }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} m={2}>
      <Toolbar>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h4" className={classes.typo}>
              Dota Stats
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={changeTheme}>
              {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
