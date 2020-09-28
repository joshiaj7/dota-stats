import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const matchStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 800,
  },
  textfield: {
    width: '100%',
    color: '#fff',
  },
});

export default function Matches() {
  const classes = matchStyles();
  const [matchId, setMatchId] = useState();
  // const [match, setMatch] = useState([]);

  // useEffect(() => {
  //   getMatch();
  // }, []);

  // const getMatch = async () => {
  //   const resp = await fetch('https://api.opendota.com/api/matches/{match_id}');
  //   const resp_json = await resp.json();
  //   setMatch(resp_json.slice(0, 30));
  // };

  const handleChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(matchId);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
          <Button type="submit">
            <SearchIcon />
          </Button>
        </Grid>
        <Grid item md={12}>
          This is the content
        </Grid>
      </Grid>
    </form>
  );
}
