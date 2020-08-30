import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header';
import DotaTeams from './components/DotaTeams/DotaTeams';
import Sidebar from './components/Sidebar/Sidebar';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asd: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Grid container spacing={0}>
          <Grid item md={2}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item md={10}>
            <Container>
              <DotaTeams></DotaTeams>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
