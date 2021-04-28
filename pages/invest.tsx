import Link from 'next/link'
import {Button, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/404.module.css'
import SimpleDialogDemo from '../components/Dialog'

const useStyles = makeStyles(() => ({
    dialog: {
        position: "relative",
        // top: "1.2rem",
        // left: "1rem"
    }
}))

 const Invest = () => {
    const classes = useStyles();
     return (
    <Box
    width="66%"
    mx="auto"
    className = {styles.page}>
      <Link href="/">
        <Button variant="outlined" position="relative" left="90%" top="0" right="0" color="primary">X</Button>
      </Link>
          <br/>
      <h1>Due to international regulations we need to verify some information before you can participate in the pre-sale.</h1>
      <h1>Please contact us:</h1>
      <br/>
      <Box mx="auto" display="flex">
          <Box className={classes.dialog}>
              <SimpleDialogDemo />
          </Box>
      </Box>
    </Box>
)}

export default Invest
