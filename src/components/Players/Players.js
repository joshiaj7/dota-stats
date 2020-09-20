import React, { useState, useEffect } from 'react';
// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoadingPage from '../Global/LoadingPage';

const playersStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 800,
  },
});

export default function Players() {
  const classes = playersStyles();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const resp = await fetch('https://api.opendota.com/api/playersByRank');
    const resp_json = await resp.json();
    setPlayers(resp_json.slice(0, 30));
  };

  return (
    <div>
      <LoadingPage />
    </div>
  );
}
