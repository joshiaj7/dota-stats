import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardmedia: {
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    height: 100,
  },
  card: {
    background: '#073642',
    maxWidth: 300,
    minHeight: 300,
  },
  title: {
    color: '#fdf6e3',
  },
  typo: {
    color: '#eee8d5',
  },
});

export default function DotaTeams() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const data = await fetch('https://api.opendota.com/api/teams');
    const teams = await data.json();
    setData(teams.slice(0, 32));
  };

  return (
    <Grid container spacing={3}>
      {data.map((team) => (
        <Grid item sm={3} key={team.team_id}>
          <Card className={classes.card}>
            <div className={classes.cardmedia}>
              <img
                src={team.logo_url}
                className={classes.img}
                alt={team.tag ? team.tag : 'team'}
              ></img>
            </div>
            <CardContent className={classes.typo} align="left">
              <Typography gutterBottom variant="h6" className={classes.title}>
                {team.name}
              </Typography>
              <Typography gutterBottom variant="body1" display="block">
                Rating : {team.rating}
              </Typography>
              <Typography gutterBottom variant="body1" display="block">
                Wins : {team.wins}
              </Typography>
              <Typography gutterBottom variant="body1" display="block">
                Losses : {team.losses}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
