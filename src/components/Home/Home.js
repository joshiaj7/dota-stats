import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles({
  root: {
    width: '100%',
    color: '#ffffff',
  },
});

export default function Home() {
  const classes = homeStyles();

  return <div className={classes.root}>this is home</div>;
}
