import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    title: {
        fontFamily: "MoonTime",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
            width: "100%"
        }
    },
    body: {
        fontFamily: "FuturaLight",
        width: "60%",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            alignItems: "start"
        }
    }
}))

const WhatWeDo = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Typography className={classes.title} align="center" variant="h2">What We Do</Typography>
            <Typography className={classes.body} variant="h6" align="center">
            Vegan AF scales vegan businesses in Africa to make the plant-based evolution and education accessible to the fastest-growing continent on Earth.
            </Typography>
        </Box>
    )
}

export default WhatWeDo