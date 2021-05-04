import {AppBar, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleDialogDemo from './Dialog'

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
            mx={1}
            fontSize="0.44rem">
                <Box flexGrow={1}><Typography>Vegan<span className={classes.span}>Africa</span>Fund </Typography></Box>
                 <SimpleDialogDemo />
            </Box>
        </AppBar>
    )
}

export default Footer