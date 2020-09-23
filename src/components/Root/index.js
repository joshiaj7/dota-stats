import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

export default function Root() {
  const [darkMode, toggleDarkMode] = useState(true);

  const changeTheme = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={darkMode ? getTheme('dark') : getTheme('light')}>
        <div className="App">
          <Header changeTheme={changeTheme} darkTheme={darkMode}></Header>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Sidebar></Sidebar>
            </Grid>
            <Grid item xs={10}>
              <Content></Content>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </Router>
  );
}
