import Link from 'next/link'
import {Button, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/404.module.css'
import SimpleDialogDemo from '../components/Dialog'

const useStyles = makeStyles(() => ({
    dialog: {
        position: "relative",
        top: "1.2rem",
        left: "1rem"
    }
}))

 const Invest = () => {
    const classes = useStyles();
     return (
    <Box 
    width="50%" 
    mx="auto" 
    className = {styles.page}>
    <h1>Due to international regulations we need to verify some information before you can participate in the pre-sale.</h1>
    <Box display="flex">
        <h1>Please contact us:</h1>
        <Box className={classes.dialog}>
            <SimpleDialogDemo />
        </Box>
    </Box>
    <Link href="/">
        <Button variant="outlined" color="primary">Go home</Button>
      </Link>
    </Box>
)}

export default Invest