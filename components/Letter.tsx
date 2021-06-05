import React from 'react'
import Link from 'next/link'
import {Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: "FuturaMediumItalic"
    },

    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    envelope: {
        paddingTop: "0.6rem",
        cursor: "pointer"
    }
}))

const Letter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
        <Typography className={classes.title} align="center" variant="h6">Letter to Vegans Around the World</Typography>
        <Link href="/letter">
        <img className={classes.envelope} alt="envelope" src="/images/envelope.png" />
        </Link>
        </Box>
    )
}

export default Letter