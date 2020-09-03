import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asd: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Grid container spacing={0}>
            <Grid item sm={1}>
              <Sidebar></Sidebar>
            </Grid>
            <Grid item sm={11}>
              <Content></Content>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
