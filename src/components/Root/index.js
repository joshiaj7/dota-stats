import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const rootStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
    textAlign: 'center',
  },
}));

export default function Root({ changeTheme, darkMode }) {
  const classes = rootStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Header changeTheme={changeTheme} darkMode={darkMode}></Header>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Content />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
