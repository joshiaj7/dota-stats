import React, { useState, useEffect } from 'react';
// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const playersStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 1000,
  },
});

export default function Players() {
  const classes = playersStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const data = await fetch('https://api.opendota.com/api/playersByRank');
    const players = await data.json();
    setData(players.slice(0, 30));
    console.log(players);
  };

  return <div> This is players</div>;
}
