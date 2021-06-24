import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
    firstPaper: {
        width: "60%",
        margin: "1.5rem auto",
        padding: "3rem 6rem 6rem 6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },
    paper: {
        width: "60%",
        margin: "1.5rem auto",
        padding: "6rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },

    section: {
        '& h3:first-of-type' : {
            fontFamily: "JosefinSansBold",
            color: "#88a283",
            textAlign: "center"
        },
        '& p': {
            fontFamily: "JosefinSansLight",
            fontSize: "1rem",
            fontWeight: "500"
        },

        '& h2': {
            textAlign: "center"
        }
    },

    footer: {
        position: "relative",
        top: "4rem",
        display: "flex",
        justifyContent: "flex-end",
        fontFamily: "JosefinSansBold",
        [theme.breakpoints.down('xs')] : {
            top: "2rem"
        }
    },

    span: {
        color: "#88a283",
        textDecoration: "underline"
    },

    dt: {
        '& p': {
            marginBottom: "0.4rem"
        }
    },

    dd: {
        '& p' : {
            margin: "0 0.4rem"
        }
    },

    caption: {
        fontFamily: "JosefinSansBold",
        color: "#88a283",
        textAlign: "center"
    },

    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "0.9rem",
        color: "#88a283"
    },

    topImage: {
        width: "97%",
        height: "auto"
    },

    imageDimensions: {
            width: "95%",
            height: "auto"
    },

    logo: {
        width: "80px",
        height: "80px",
        cursor: "pointer"
    }
}))


const WhitePaper = () => {
    const classes = useStyles();
    return (
        <>
        <Layout title="Home | Vegan AF">
        <Head>
         <title>White Paper | Vegan AF</title>
         <meta charSet="utf-8" />
         <link rel="shortcut icon" href="/images/veganLogo.ico" sizes="144x144"/>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className={classes.section}>
            <Paper className={classes.paper}>
                <h3>ⓥAF Wallet</h3>
                <p>
                Watch the fantom network for ⓥAF transactions.
                </p>
            </Paper>
            <Paper className={classes.paper}>
                <h3>ⓥPOS</h3>
                <p>
                Every Vegan joint needs a POS. Accept VAFs, show you're vegan AF.
                </p>
            </Paper>
            <Paper className={classes.paper}>
                <h3>ⓥRewards</h3>
                <p>
                Reward the consumers of VAF partners with VAF, and make it exciting.
                </p>
            </Paper>
        </section>
        </Layout>
        </>
    )
}

export default WhitePaper
