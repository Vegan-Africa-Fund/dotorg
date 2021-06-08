import {AppBar, Typography, Grid, Box, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SimpleDialogDemo from './Dialog'

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        paddingRight: "1rem",
        backgroundColor: "#88a283"
    },
    span: {
        fontWeight: 800
    },

    social: {
        width: "30px",
        height: "30px",
        margin: "0 0.3rem 0.5rem 0.3rem"
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
        justifyContent: "flex-end",
        alignItems: "center"
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
                <Box mr="2.5rem" display="flex">
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <Avatar className={classes.social} alt="medium" src="/images/medium.png" />
                    </a>
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <Avatar className={classes.social} alt="twitter">
                            <TwitterIcon />
                        </Avatar>
                    </a> 
                    <a href="https://veganafricafund.medium.com/" target="_blank">
                        <Avatar className={classes.social} alt="instagram">
                            <InstagramIcon />
                        </Avatar>
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