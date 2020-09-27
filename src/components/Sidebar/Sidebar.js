import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Paper from '@material-ui/core/Paper';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';

const sidebarStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.component,
    width: 240,
  },
  link: {
    width: '100%',
    textDecoration: 'none',
    color: 'white',
  },
  listInactive: {
    background: 'none',
  },
  listActive: {
    background: theme.palette.background.activeText,
    textDecoration: 'none',
  },
  listIcon: {
    color: theme.palette.primary.main,
  },
  typo: {
    color: theme.palette.text.primary,
  },
}));

export default function Sidebar() {
  const classes = sidebarStyles();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.slice(1));

  const choosePage = (page) => {
    setActive(page);
  };

  const pages = [
    {
      title: 'Home',
      path: '',
      icon: <HomeSharpIcon />,
    },
    {
      title: 'Teams',
      path: 'teams',
      icon: <PeopleSharpIcon />,
    },
    {
      title: 'Players',
      path: 'players',
      icon: <PersonSharpIcon />,
    },
    {
      title: 'Matches',
      path: 'matches',
      icon: <SportsEsportsSharpIcon />,
    },
  ];

  return (
    <Paper className={classes.root}>
      <List>
        {pages.map((page) => (
          <Link to={'/' + page.path} className={classes.link} key={page.title}>
            <ListItem
              button
              onClick={() => choosePage(page.path)}
              className={
                active === page.path ? classes.listActive : classes.listInactive
              }
            >
              <ListItemIcon className={classes.listIcon}>
                {page.icon}
              </ListItemIcon>
              <ListItemText className={classes.typo}>{page.title}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
}
