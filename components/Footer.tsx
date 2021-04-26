import {AppBar, Typography, Box, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
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
                <Box flexGrow={0.9}><Typography>Vegan<span className={classes.span}>Africa</span> </Typography></Box>
                <Button>Donate</Button>
                <Button>Chat</Button>
            </Box>
        </AppBar>
    )
}

export default Footer