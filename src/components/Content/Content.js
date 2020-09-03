import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import DotaTeams from '../DotaTeams/DotaTeams';
import Home from '../Home/Home';

const contentStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 1000,
  },
});

export default function Content() {
  const classes = contentStyles();

  return (
    <Container className={classes.root}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/teams" component={DotaTeams}></Route>
        {/* <Route path="/teams/:id" component={Team}></Route> */}
      </Switch>
    </Container>
  );
}
