import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from './components/theme';
import Root from './components/Root';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: true,
    };
  }

  changeTheme = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.darkMode ? getTheme('dark') : getTheme('light')}
      >
        <CssBaseline />
        <Root changeTheme={this.changeTheme} darkMode={this.state.darkMode} />
      </ThemeProvider>
    );
  }
}

export default App;
