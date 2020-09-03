import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';

const useStyles = makeStyles({
  root: {
    background: '#073642',
    width: 240,
    minHeight: 1000,
    position: 'fixed',
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
    background: '#657b83',
    textDecoration: 'none',
  },
  listIcon: {
    color: '#fff',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.slice(1));

  const choosePage = (page) => {
    setActive(page);
    console.log(active);
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
      path: 'player',
      icon: <PersonSharpIcon />,
    },
    {
      title: 'Matches',
      path: 'matches',
      icon: <SportsEsportsSharpIcon />,
    },
  ];

  return (
    <List className={classes.root}>
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
            <ListItemText>{page.title}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
