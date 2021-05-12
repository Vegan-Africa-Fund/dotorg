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
        fontSize: "1.1rem"
    },

    name: {
        fontStyle: "italic"
    }
  }));


const Statement = () => {
    const classes = useStyles();

    return (
        <Box display="flex">
            <Avatar alt="Sunny" src="/images/Sunny.webp" className={classes.large} />
                <Typography className={classes.paragraph} variant="body1">
                “Veganism, historically, has been mostly used as a reactive technique by concerned individuals doing our part to improve health, act ethically, and reduce environmental impact. Vegan AF is ushering in a new era of utilizing veganism as a preventative approach to some of the world’s greatest challenges.” <span className={classes.name}>- Sunny, Vegan AF Founder</span> 
                </Typography>
        </Box>
    )
}

export default Statement