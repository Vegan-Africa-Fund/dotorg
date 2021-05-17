import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Divider, Grid, Button} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import Layout from '../components/Layout';

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

    bodyContent: {
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
        fontSize: "1.2rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "start",
            width: "95%",
            margin: "0 auto"
        }
    },

    employee: {
        width: "80%",
        margin: "2rem auto",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    employeeImage: {
        width: "216px",
        height: "217px"
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
    showMore: {
        color: deepPurple[500],
      },

    showLess: {
        paddingLeft: "0",
        color: deepPurple[500]
    }
}))

const Team = () => {
    const classes = useStyles();
    const[show, setShow] = useState(false)

    console.log(show)

    const handleMore = () => {
        setShow(true)
    }

    const handleLess = () => {
        setShow(false)
    }
    return (
        <Layout title="Team | VeganAfrica">
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
            <Box className={classes.bodyContent}>
                <Typography variant="h5">Sunny Satva</Typography>
                <Typography variant="h6">Founder</Typography>
                <Typography className={classes.statement} variant="body1">
                I started Vegan AF while traveling around East Africa, hoping to make a positive impact in all of the places I went. I love food and love to eat, and one of my favorite ways to impactfully spend my money is by supporting businesses that are aligned with my ethics and vision for the future.  While in Kenya, I realized that I don’t just want to buy from plant-based businesses - I want to help them scale their operations! 
                {show ? (
                    <>
                    <span> I began impact investing in early 2021 after seeing a huge need for start-up capital in African businesses. I was inspired by the vegan entrepreneurs creating kind businesses and working to veganize their communities in East Africa. There are many amazing people spreading veganism on a local level, but at the same time there's a clear lack of vegan-centric investment here. I feel called to raise awareness about the environmental degradation caused by farming and consuming animals, and to help shape a more sustainable future. I also want to show everyone how delicious vegan food is! 

                        It’s clear to me that achieving a more equitable future and enabling a thriving plant-based economy requires the transparency and decentralization provided by blockchain technology. This is why I created a digital token to represent the Vegan AF movement. 

                        Vegan AF is prioritizing a world with more vegans. We aim to provide access to vegan products, education about why going vegan benefits you, your community and your planet (and the animals!), and foster a plant-based community. The businesses Vegan AF invests in have a debt of our token, which they can accept from customers and use to buy back shares of their own companies from Vegan AF.  

                        I’m a social entrepreneur with a desire to shape a kind, beautiful future. I previously worked as an outreach director for the New York Public Interest Research Group (NYPIRG) and the Andrew Yang 2020 U.S. presidential campaign.
                    </span>
                    <Box>
                        <Button onClick={handleLess} className={classes.showLess}>Show Less</Button>
                    </Box>
                    </>
                ) : (
                    <Button onClick={handleMore} className={classes.showMore}>Read More</Button>
                )}
                </Typography>
        </Box>
        </Box>
        <Divider />
            <Box className={classes.employee}>
                <img className={classes.employeeImage} alt="marketing-head" src="/images/Wendy.webp" />
                <Box className={classes.bodyContent}>
                    <Typography variant="h6">Wendy Matheka</Typography>
                    <Typography variant="subtitle2">Head of Digital</Typography>
                    <Typography className={classes.statement} variant="body1">I create content, manage social media, and manage the overall digital presence of Vegan AF. I got involved because I’m passionate about veganism, and creating awareness is the first step to lasting change. We live on a meat-centric continent and I'm excited to be part of the solution. I'm passionate about helping create the  platform, society and community that I needed for support when I went vegan. I hope to see a more compassionate, conscious Africa and world where we live more sustainably, respect life and our planet and improve the world for the generations to come.</Typography>
                </Box>
            </Box>
        </Layout>
    )
}


export default Team