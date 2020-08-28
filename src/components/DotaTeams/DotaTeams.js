import React,  { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    img: {
        height: 100,
    },
    card: {
        background: "#073642",
        maxWidth: 300,
    },
    typo: {
        color: "#fff"
    }
  });


export default function DotaTeams() {
    const classes = useStyles();
    const [data, setData] = useState([]);
  
    useEffect (() => {
        fetch("https://api.opendota.com/api/teams")
        .then(response => response.json())
        .then(
            (result) => {
                const res = result.slice(0, 30);
                console.log(res);
                setData(res);
            }
        );
    }, []);

    return (
        <Grid container spacing={3}>
            {data.map(team => (
                <Grid item sm={3} key={team.team_id}>
                    <Card
                    className={classes.card}>
                        <div>
                            <img 
                            src={team.logo_url} 
                            className={classes.img}
                            // alt={team.tag ? team.tag : "team" }
                            ></img>
                        </div>
                        <CardContent className={classes.typo} align="left">
                            <Typography gutterBottom variant="body1">
                                Name : {team.name}
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                Rating : {team.rating}
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                Wins : {team.wins}
                            </Typography>
                            <Typography gutterBottom variant="body1">
                            Losses : {team.losses}
                            </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            ))}
      </Grid>
    );
}