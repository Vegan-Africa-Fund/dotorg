import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Menu, IconButton, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title?: string
}

const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    '& h4': {
      borderLeft: "1px solid black",
      width: "10%",
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "3.5",
      cursor: "pointer",
      [theme.breakpoints.down('sm')] : {
        display: "none"
      }
    },
    '& h4:first-of-type': {
      borderLeft: "0"
    },
    '& div' : {
      width: "20%",
      textAlign: "center",
      '& p:first-child': {
        fontFamily: "MoonTime",
        fontSize: "4rem",
        margin: "0",
        [theme.breakpoints.down('sm')] : {
          fontSize: "2.5rem"
        }
      },
      '& p:nth-child(2)': {
        margin: "0",
        fontSize: "1.5rem",
        fontWeight: "600",
        position: "relative",
        bottom: "1.4rem",
        right: "0.5rem",
        letterSpacing: "3px",
        [theme.breakpoints.down('sm')] : {
          fontSize: "1rem",
          right: "0.3rem"
        }
      }
    }
  }
}))


const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className= {classes.nav}>
        <Box display={{ xs: 'block', md: 'none' }}>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Donate</MenuItem>
          <MenuItem onClick={handleClose}>Invest</MenuItem>
          <MenuItem onClick={handleClose}>Learn</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
        </Box>
        <Link href="#"><h4>Home</h4></Link>
        <Link href="#invest"><h4>Donate</h4></Link>
        <Link href="#donate"><h4>Invest</h4></Link>
        <div>
          <Link href="#"><p>Vegan</p></Link>
          <Link href="#"><p>A F</p></Link>
          </div>
        <Link href="#"><h4>Go Vegan</h4></Link>
        <Link href="#"><h4>Donate</h4></Link>
        <Link href="#"><h4>About</h4></Link>
      </nav>
    </header>
    <Box
    mb="4rem"
    >
    {children}
    </Box>
    <footer>
      <Footer />
    </footer>
  </>
)}

export default Layout
