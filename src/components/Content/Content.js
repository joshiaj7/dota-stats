import React from 'react';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import DotaTeams from '../DotaTeams/DotaTeams';
import Players from '../Players/Players';
import Home from '../Home/Home';

const contentStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 900,
  },
  body: {
    background: '#002b36',
    minHeight: 800,
    width: '100%',
  },
});

export default function Content() {
  const classes = contentStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.body} elevation={0}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/teams" component={DotaTeams}></Route>
          <Route path="/players" component={Players}></Route>
          {/* <Route path="/teams/:id" component={Team}></Route> */}
        </Switch>
      </Paper>
    </Container>
  );
}
