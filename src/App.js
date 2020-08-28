import React, { Component } from 'react';
import './App.css';
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header"
import DotaTeams from "./components/DotaTeams/DotaTeams"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asd: [],
    }
  }

render () {
return (
<div className="App">
<Header></Header>
<Container>
<DotaTeams></DotaTeams>
</Container>
</div>
);
}
}

export default App;
