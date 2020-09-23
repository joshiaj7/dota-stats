import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000',
      component: '#3f51b5',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
    gradient: {
      main:
        'linear-gradient(90deg, rgba(44,56,126,1) 0%, rgba(33,150,243,1) 100%)',
    },
    background: {
      main: '#fff',
      component: '#268bd2',
      paper: '#000',
      activeText: '#6c71c4',
    },
  },
  transparent: {
    black: {
      10: 'rgba(0,0,0,0.1)',
      20: 'rgba(0,0,0,0.2)',
      30: 'rgba(0,0,0,0.3)',
      40: 'rgba(0,0,0,0.4)',
      50: 'rgba(0,0,0,0.5)',
      60: 'rgba(0,0,0,0.6)',
      70: 'rgba(0,0,0,0.7)',
      80: 'rgba(0,0,0,0.8)',
      90: 'rgba(0,0,0,0.9)',
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fff',
      component: '#073642',
    },
    text: {
      primary: '#fff',
      secondary: '#fdf6e3',
    },
    gradient: {
      main:
        'linear-gradient(90deg, rgba(72,40,128,1) 0%, rgba(103,58,183,1) 100%)',
    },
    background: {
      main: '#002b36',
      component: '#073642',
      paper: '#000',
      activeText: '#657b83',
    },
  },
  transparent: {
    black: {
      10: 'rgba(0,0,0,0.1)',
      20: 'rgba(0,0,0,0.2)',
      30: 'rgba(0,0,0,0.3)',
      40: 'rgba(0,0,0,0.4)',
      50: 'rgba(0,0,0,0.5)',
      60: 'rgba(0,0,0,0.6)',
      70: 'rgba(0,0,0,0.7)',
      80: 'rgba(0,0,0,0.8)',
      90: 'rgba(0,0,0,0.9)',
    },
  },
});

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default function getTheme(theme) {
  return themes[theme];
}
