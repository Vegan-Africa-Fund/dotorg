import {AppBar, Typography, List, ListItem, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleDialogDemo from './Dialog'

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    span: {
        fontWeight: 800
    },

    social: {
        width: "25px",
        height: "25px"
    },

    list: {
        display: "flex",
        justifyContent: "center",
    },
    listItem: {
        padding: "0.2rem"
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
        padding: "0.5rem 0",
        [theme.breakpoints.down('xs')]: {
            paddingRight: "0.3rem"
        }
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
        <AppBar position="fixed" color="default" className = {classes.appBar}>
            <Grid container>
                <Grid item xs={4}>
                <Typography className={classes.title}>Vegan<span className={classes.span}>Africa</span>Fund © 2021</Typography>
                </Grid>
                <Grid className={classes.list} item xs={4}>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem} component="a" href="https://www.twitter.com/" target="_blank">
                        <img className={classes.social} alt="instagram" src="/images/twitter.png" />
                        </ListItem>
                        <ListItem className={classes.listItem} component="a" href="https://www.instagram.com/" target="_blank">
                        <img className={classes.social} alt="instagram" src="/images/instagram.png" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid className={classes.chat} item xs={4}>
                <SimpleDialogDemo />
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Footer