import React, { useState, useEffect } from 'react';
import LoadingPage from '../assets/LoadingPage';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  cardmedia: {
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    height: 100,
  },
  card: {
    background: theme.palette.background.component,
    maxWidth: 250,
    minHeight: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24,
  },
  title: {
    color: theme.palette.text.secondary,
  },
  typo: {
    color: theme.palette.text.primary,
  },
}));

export default function DotaTeams() {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const resp = await fetch('https://api.opendota.com/api/teams');
    const resp_json = await resp.json();
    setTeams(resp_json.slice(0, 32));
  };

  const showData = (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="row"
      className={classes.root}
    >
      {teams.map((team) => (
        <Grid item xs={6} md={3} key={team.team_id}>
          <Card className={classes.card}>
            <div className={classes.cardmedia}>
              <img
                src={team.logo_url ? team.logo_url : '/images/placeholder.png'}
                className={classes.img}
                alt={team.tag ? team.tag : 'team'}
              ></img>
            </div>
            <CardContent className={classes.typo} align="left">
              <Typography gutterBottom variant="h6" className={classes.title}>
                {team.name ? team.name : 'NO_NAME'}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                display="block"
                className={classes.typo}
              >
                Rating : {team.rating}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                display="block"
                className={classes.typo}
              >
                Wins : {team.wins}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                display="block"
                className={classes.typo}
              >
                Losses : {team.losses}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const showLoading = <LoadingPage></LoadingPage>;

  return <div>{teams.length > 0 ? showData : showLoading}</div>;
}
