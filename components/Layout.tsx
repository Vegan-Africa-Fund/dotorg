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
      width: "12%",
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
    '& h4:nth-child(4)': {
      borderRight: "1px solid black"
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
    },
    [theme.breakpoints.down('sm')] : {
      justifyContent: "space-between",
      width: "90%"
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
          <Link href="/"><MenuItem>Home</MenuItem></Link>
          <Link href="/donate"><MenuItem>Donate</MenuItem></Link>
          <Link href="/invest"><MenuItem>Invest</MenuItem></Link>
          <Link href="/team"><MenuItem>Meet the team</MenuItem></Link>
          <Link href="/donate"><MenuItem>Donate</MenuItem></Link>
          <Link href="/about"><MenuItem>About</MenuItem></Link>
        </Menu>
        </Box>
        <Link href="/"><h4>Home</h4></Link>
        <Link href="/donate"><h4>Donate</h4></Link>
        <Link href="/invest"><h4>Invest</h4></Link>
        <div>
          <Link href="/"><p>Vegan</p></Link>
          <Link href="/"><p>A F</p></Link>
          </div>
        <Link href="/team"><h4>Meet the team</h4></Link>
        <Link href="/donate"><h4>Donate</h4></Link>
        <Link href="/about"><h4>About</h4></Link>
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
