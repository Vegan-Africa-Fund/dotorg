import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Typography, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },

    paragraph: {
        width: "80%",
        paddingTop: "0.6rem",
        marginLeft: "0.8rem",
        fontFamily: "FuturaLight",
        fontSize: "1.1rem",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },

    name: {
        fontStyle: "italic"
    },
    container: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    avatar: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            width: "100%",
            justifyContent: "center"
        }
    }
  }));


const Statement = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.avatar}>
                <Avatar alt="Sunny" src="/images/Sunny.webp" className={classes.large} />
            </Box>
                <Typography className={classes.paragraph} variant="body1">
                “Veganism has historically been used as a reactive technique by concerned individuals doing our part to act ethically, improve our health, and reduce environmental degradation. Vegan AF is ushering in a new era - using veganism as a preventative approach to solve some of the world’s greatest challenges.” <span className={classes.name}>- Sunny, Vegan AF Founder</span> 
                </Typography>
        </Box>
    )
}

export default Statement