import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Divider, Grid} from '@material-ui/core';
import SimpleAccordion from '../components/Accordion'

const useStyles = makeStyles(theme => ({
    founder: {
        display: "flex",
        width: "80%",
        margin: "1rem auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        }
    },

    ceoContent: {
        marginLeft: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        }
    },
    ceoImage: {
        height: "217px",
        [theme.breakpoints.down('sm')]: {
            width: "216px"
        }
    },

    statement: {
        fontFamily: "FuturaLight",
        fontSize: "1.2rem"
    },

    employee: {
        width: "80%",
        margin: "2rem auto"
    },
    employeeContent: {
        width: "200px",
        textAlign: "center"
    },

    employeeImage: {
        width: "250px",
        height: "250px"
    },

    divider: {
        position: "relative",
        top: "2rem",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },

    grid: {
        width: "80%",
        margin: "0 auto"
    },
    teamTitle: {
        fontFamily: "MoonTime",
        fontSize: "2.6rem",
    },
}))

const Team = () => {
    const classes = useStyles();
    return (
        <>
        <Grid className={classes.grid} container>
            <Grid item lg={5} md={4}>
                <Divider className={classes.divider} />
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
                <Box fontWeight="fontWeightBold">
                <Typography className={classes.teamTitle} variant="h6" align="center">Meet the Team</Typography>
                </Box>
            </Grid>
            <Grid item lg={5} md={4}>
                <Divider className={classes.divider} />
            </Grid>
        </Grid>
        <Box className={classes.founder}>
            <img className={classes.ceoImage} alt="ceo" src="/images/Sunny.webp" />
            <Box className={classes.ceoContent}>
                <Typography variant="h5">Sunny Satva</Typography>
                <Typography variant="h6">Founder & CEO</Typography>
                <Typography className={classes.statement} variant="body1">
                I started Vegan AF while traveling around East Africa, hoping to make a positive impact in all of the places I went. I love food and love to eat, and one of my favorite ways to impactfully spend my money is by supporting businesses that are aligned with my ethics and vision for the future.  While in Kenya, I realized that I don’t just want to buy from plant-based businesses - I want to help them scale their operations!  
                <SimpleAccordion />
                </Typography>
        </Box>
        </Box>
        <Divider />
            <Box className={classes.employee}>
                <img className={classes.employeeImage} alt="marketing-head" src="/images/Wendy.webp" />
                <Box className={classes.employeeContent}>
                    <Typography variant="h6">Wendy Matheka</Typography>
                    <Typography variant="subtitle2">Marketing & Communications Head</Typography>
                </Box>
            </Box>
        </>
    )
}


export default Team