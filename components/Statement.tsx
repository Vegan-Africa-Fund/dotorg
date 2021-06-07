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
                “Veganism, historically, has been adopted by concerned individuals doing their part to act ethically, improve health, and solve environmental issues. Vegan AF is utilizing veganism as a strategy to meet some of the world’s greatest challenges, and to restore the balance between human and nature.” <span className={classes.name}>- Sunny, Vegan AF Founder</span> 
                </Typography>
        </Box>
    )
}

export default Statement