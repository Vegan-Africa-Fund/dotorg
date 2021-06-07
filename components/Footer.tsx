import {AppBar, Typography, Grid, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleDialogDemo from './Dialog'

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        paddingRight: "1rem"
    },
    span: {
        fontWeight: 800
    },

    social: {
        width: "24px",
        height: "24px"
    },

    list: {
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column"
    },

    footer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0.6rem 0",
        fontSize: "0.44rem",
        height: "55px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            height: "auto"
        }
    },
    chat: {
        display: "flex",
        justifyContent: "flex-end"
    },
    title: {
        padding: "0.8rem 0",
        display: "flex",
        height: "100%",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            padding: "0.5rem 0.4rem",
            fontSize: "0.8rem",
            display: "block",
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" className = {classes.appBar}>
            <Grid container>
                <Grid className={classes.list} item xs={7}>
                <Typography className={classes.title}>Vegan<span className={classes.span}>Africa</span>Fund © 2021</Typography>
                <Box mr="2.5rem">
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <img className={classes.social} alt="medium" src="/images/medium.png" />
                    </a>
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <img className={classes.social} alt="twitter" src="/images/twitter.png" />
                    </a> 
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <img className={classes.social} alt="instagram" src="/images/instagram.png" />
                    </a>
                </Box>
                </Grid>
                <Grid className={classes.chat} item xs={5}>
                <SimpleDialogDemo />
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Footer