import {AppBar, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "#000",
        color: "#fff"
    },
    span: {
        fontWeight: 800
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="default" className = {classes.appBar}>
            <Box 
            display="flex"
            ml={1}
            fontSize="0.44rem">
                <Box flexGrow={0.9}><Typography>Fund:<span className={classes.span}>₿0.71522656</span> </Typography></Box>
                <Typography><span className={classes.span}>bitcoin</span>mission©2021</Typography>
            </Box>
        </AppBar>
    )
}

export default Footer