import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const statsStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 800,
  },
  typo: {
    color: theme.palette.text.primary,
  },
}));

export default function MatchStats({ match }) {
  const classes = statsStyles();

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <Grid item>
        <Typography className={classes.typo}>
          Match ID : {match.match_id}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>first_blood_time : {match.first_blood_time}</Typography>
      </Grid>
      <Grid item>
        <Typography>lobby_type : {match.lobby_type}</Typography>
      </Grid>
      <Grid item>
        <Typography> dire_score : {match.dire_score}</Typography>
      </Grid>
      <Grid item>
        <Typography> radiant_score : {match.radiant_score}</Typography>
      </Grid>
    </Grid>
  );
}
