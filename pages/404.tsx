import Link from 'next/link'
import {Button, Box} from '@material-ui/core'
import styles from '../styles/404.module.css'

 const Custom404 = () => {
     return (
    <Box
    width="50%"
    mx="auto"
    className = {styles.page}>

    <p>We moved our homepage to VeganAfricaFund.com </p><p> Click below:</p>
    <hr />
    <Link href="https://veganafricafund.com">
        <Button className={styles.button} variant="outlined" color="primary">Visit Vegan AF's new site!</Button>
      </Link>
      <hr />
      <img alt="vegan" className={styles.logo} src="/images/veganLogo.png" />
    </Box>
)}

export default Custom404
