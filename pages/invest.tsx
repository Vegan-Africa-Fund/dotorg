import Link from 'next/link'
import {IconButton, Box} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/404.module.css'
import SimpleDialogDemo from '../components/Dialog'

const useStyles = makeStyles(() => ({
    dialog: {
        position: "relative",
    },
    button: {
        border: "1px solid #88a384"
    }
}))

 const Invest = () => {
    const classes = useStyles();
     return (
    <>
        <Box position= "relative" top="1rem" left="1rem" width="50%">
            <Link href="/">
                <IconButton className={classes.button} color="primary">
                    <CloseIcon />
                </IconButton>
            </Link>
        </Box>
        <Box
        width="66%"
        mx="auto"
        className = {styles.page}>
        <h1>Due to international regulations we need to verify some information before you can participate in the pre-sale.</h1>
        <h1>Please contact us:</h1>
        <br/>
        <Box mx="auto" display="flex">
            <Box className={classes.dialog}>
                <SimpleDialogDemo />
            </Box>
        </Box>
        </Box>
    </>
)}

export default Invest
