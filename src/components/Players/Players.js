import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoadingPage from '../assets/LoadingPage';

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

  const showPlayers = <div>Showing Players</div>;

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    //   <TextField label="" defaultValue="" />
    // </form>

    <div>
      <LoadingPage />
    </div>
  );
}
