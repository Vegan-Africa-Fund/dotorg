import React from 'react'
import {Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: "70%",
        margin: "auto",
        fontSize: "1.5rem",
        padding: "1rem 0",
        textAlign: "center",
        [theme.breakpoints.down('sm')] : {
            textAlign: "left",
            fontSize: "1.2rem",
            width: "100%"
        }
    },

    button: {
        backgroundColor: "#81c784",
        color: "#fff",
        width: "15%",
        [theme.breakpoints.down('sm')] : {
            width: "30%"
        },
        [theme.breakpoints.down('xs')] : {
            width: "50%"
        }
    },

    title: {
        fontFamily: "MoonTime",
        [theme.breakpoints.down('sm')] : {
            display: "none"
        } 
    }
}))


const Mission = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="#388e3c" width="80%" p="1rem" display="flex" alignItems="flex-end">
                <Typography className={classes.content} variant="body2">
                    A vegan lifestyle can support incredible health and protect huge numbers of animals, while
                    simultaneously combating climate change. Plus, the food is insanely delicious and becomes more widely
                    available every year.
                </Typography>
                <Typography className={classes.title} variant="h3" align="center">Our Mission</Typography>
        </Box>
    )
}

export default Mission