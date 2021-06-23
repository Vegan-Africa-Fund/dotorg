import React from 'react'
import {Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: "80%",
        margin: "auto",
        fontSize: "1.5rem",
        padding: "0.75rem 0",
        fontFamily: "FuturaLight",
        textShadow: "0.5px 0.5px 0.5px #000, 0 0 0.3em #f8fff7, 0 0 0.2em #000",
        color: "#f8fff7",
        [theme.breakpoints.down('sm')] : {
            fontSize: "1.2rem",
            width: "100%"
        },
        '& span' : {
            textDecoration: "underline",
            color: "#414a4c"
        }
    },

    button: {
        backgroundColor: "#88a384",
        color: "#f8fff7",
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
    },

    rightBox: {
       width: "50%",
       marginLeft: "2rem",
       borderRadius: "20px",
       padding: "0.4rem 0.8rem",
       [theme.breakpoints.down('xs')] : {
        width: "70%",
        padding: "0.1rem 0.4rem"
       }
    },

}))


const Mission = () => {
    const classes = useStyles();
    return (
        <Box display="flex" bgcolor="#88a384" className={classes.rightBox} flexDirection="column" p="1rem 0">
            <Typography className={classes.content} variant="body2">Vegan AF acts as a vegan impact fund, with operations focused on buying, holding, and helping vegan companies succeed in Africa.</Typography>
            <Typography className={classes.content} variant="body2">Check out our <span><a href="https://veganafricafund.medium.com/" target="_blank">blog posts</a></span> to keep up with what we are doing!</Typography>
        </Box>
    )
}

export default Mission
