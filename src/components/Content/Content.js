import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import DotaTeams from '../DotaTeams/DotaTeams';

export default function Content() {
  return (
    <Container>
      <Switch>
        <Route path="/teams" component={DotaTeams}></Route>
        {/* <Route path="/teams/:id" component={Team}></Route> */}
      </Switch>
    </Container>
  );
}
