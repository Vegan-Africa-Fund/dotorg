import React from 'react'
import {Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: "70%",
        margin: "auto",
        fontSize: "1.5rem",
        padding: "1rem 0",
        [theme.breakpoints.down('sm')] : {
            fontSize: "1.2rem",
            width: "100%"
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
    }
}))


const Mission = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="#88a384" borderRadius= "15px 0 0 30px" width="80%" p="1rem" display="flex" alignItems="flex-end">
        <Typography className={classes.title} variant="h3" align="center">Our Mission</Typography>
                <Typography className={classes.content} variant="body2">
                The Vegan Africa Fund invests in Vegan owned and operated businesses in Africa.

                VEGANAF is our token, there are 6,000,000 VEGANAFs

                Vegan AF helps businesses build community, raise awareness, expand in all directions, and most importantly...make more vegans!
                </Typography>
        </Box>
    )
}
// Investing in startups is about investing in people.
//                 Our mission is to educate, encourage and diversify veganism while inspiring and supporting Africans to try veganism.

export default Mission
