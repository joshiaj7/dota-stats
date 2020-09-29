import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MatchStats from './MatchStats';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const matchStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 800,
  },
  textfield: {
    width: '100%',
    color: theme.palette.text.primary,
  },
  icon: {
    color: theme.palette.text.primary,
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

export default function Matches() {
  const classes = matchStyles();
  const [matchId, setMatchId] = useState();
  const [match, setMatch] = useState();

  const getMatch = async () => {
    const resp = await fetch(`https://api.opendota.com/api/matches/${matchId}`);
    const resp_json = await resp.json();
    // setMatch({ ...match, resp_json });
    setMatch(resp_json);
    console.log(match);
  };

  const handleChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matchId) {
      getMatch();
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item md={9}>
            <TextField
              label="Input Match ID"
              value={matchId}
              className={classes.textfield}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3}>
            <Button type="submit" className={classes.button}>
              <SearchIcon className={classes.icon} />
            </Button>
          </Grid>
        </Grid>
      </form>
      {match ? <MatchStats match={match} /> : ''}
    </div>
  );
}
