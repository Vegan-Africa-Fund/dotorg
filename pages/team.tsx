import React, {useState} from 'react'
import Link from 'next/link'
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
        height: "217px",
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
    },

    advisorImage: {
        width: "116px",
        height: "117px"
    },

    advisor : {
        width: "80%",
        margin: "2rem auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            display: "flex"
        }
    },
    statement2: {
        fontFamily: "FuturaLight",
        fontSize: "1rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "start",
            width: "95%",
            margin: "0 auto"
        }
    },

    span: {
        textDecoration: "underline",
        color: "#588bae"
    }
}))

const Team = () => {
    const classes = useStyles();
    const[show, setShow] = useState(false)

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
            <img className={classes.ceoImage} alt="ceo" src="/images/Sunny.jpg" />
            <Box className={classes.bodyContent}>
                <Typography variant="h5">Sunny Satva</Typography>
                <Typography variant="h6">Founder</Typography>
                <Typography className={classes.statement} variant="body1">
                I began impact investing in vegan African companies in early 2021. One of my favorite ways to spend money is by supporting businesses which are aligned with my ethics and enabling my vision for the future. After meeting some amazing entrepreneurs in Kenya, I realized I don’t just want to buy from plant-based businesses - I also want to help them scale their operations!
                {show ? (
                    <>
                    <span> There are many amazing ventures spreading veganism on local levels, and unfortunately there's a clear lack of vegan-centric impact investing across Africa. Vegan AF is working to fill this gap. Achieving a more equitable future and enabling a thriving plant-based economy requires transparency and decentralization which can be provided by blockchain technology. You can read more about the VAF impact token, created to support our operations,
                    <span className={classes.span}><Link href="/white-paper">here</Link></span>.  I previously worked as an outreach director for the New York Public Interest Research Group (NYPIRG) and the Andrew Yang 2020 U.S. presidential campaign.
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
                    <Typography variant="h5">Wendy Matheka</Typography>
                    <Typography variant="h6">Head of Digital</Typography>
                    <Typography className={classes.statement} variant="body1">I create content, manage social media, and manage the overall digital presence of Vegan AF. I got involved because I’m passionate about veganism, and creating awareness is the first step to lasting change. We live on a meat-centric continent and I'm excited to be part of the solution. I'm passionate about helping create the  platform, society and community that I needed for support when I went vegan. I hope to see a more compassionate, conscious Africa and world where we live more sustainably, respect life and our planet and improve the world for the generations to come.</Typography>
                </Box>
            </Box>
        <Divider />
            <Box className={classes.employee}>
                <img className={classes.employeeImage} alt="advisor" src="/images/Ezra.jpg" />
                <Box className={classes.bodyContent}>
                <Typography variant="h5">Ezra Fesihatsion</Typography>
                <Typography variant="h6">Advisor</Typography>
                <Typography className={classes.statement} variant="body1">
                I was born in Addis Ababa, Ethiopia, where I attended business school and currently live. In 2011, I vowed to stop consuming and using animal products and joined the vegan movement. I began operating a 100% vegan restaurant in 2015 to serve vegan and non-vegan guests in Addis Ababa while promoting veganism to society at large. I am advising Vegan AF on operations and strategies, as I have helped many people on their plant-based journey and am aligned with the ultimate mission of making more vegans in the world. I began my vegan journey by exploring spiritual and philosophical teachings, and am especially inspired by <span className={classes.span}><a href="https://suprememastertv.com/en1/">Supreme Master Ching Hai’s television network</a></span> which promotes vegan and sustainable living, compassion, and ultimately enlightenment.
                </Typography>
                </Box>
            </Box>
        </Layout>
    )
}


export default Team