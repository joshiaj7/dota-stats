import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    background: '#073642',
    width: 240,
    minHeight: 1000,
  },
  link: {
    color: 'white',
    width: '100%',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [active, setActive] = useState('');

  const choosePage = (page) => {
    setActive(page);
    console.log(page);
  };

  const pages = [
    {
      title: 'Home',
      path: '',
    },
    {
      title: 'Teams',
      path: 'teams',
    },
    {
      title: 'Players',
      path: 'player',
    },
    {
      title: 'Matches',
      path: 'matches',
    },
  ];

  return (
    <List className={classes.root}>
      {pages.map((page) => (
        <Link to={'/' + page.path} className={classes.link} key={page.title}>
          <ListItem button onClick={() => choosePage(page.title)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText> {page.title} </ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
