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
    width: "80%",
    justifyContent: "space-around",
    margin: "0 auto",
    '& h4': {
      borderLeft: "1px solid black",
      width: "15%",
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
    '& section' : {
      width: "5rem",
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
      },
    },
    '& img': {
      width: "80px",
      height: "80px",
      position: "relative",
      top: "0.5rem",
      [theme.breakpoints.down('sm')] : {
        width: "40px",
        height: "40px",
        top: "0"
      }
    },
    [theme.breakpoints.down('sm')] : {
      justifyContent: "space-between",
      width: "90%"
    }
  },

  menuIcon: {
    paddingTop: "0"
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
      <link rel="shortcut icon" href="/images/veganLogo.ico" sizes="144x144"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className= {classes.nav}>
        <Box display={{ xs: 'flex', md: 'none' }} flexGrow={1}>
        <IconButton className={classes.menuIcon} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
          <Link href="/white-paper"><MenuItem>White Paper</MenuItem></Link>
          <Link href="/projects"><MenuItem>Projects</MenuItem></Link>
        </Menu>
        </Box>
        <Link href="/"><h4>Home</h4></Link>
        <Link href="/donate"><h4>Donate</h4></Link>
        <Link href="/invest"><h4>Invest</h4></Link>
        <img alt="vegan" src="/images/veganLogo.png" />
        <Link href="/team"><h4>Meet the team</h4></Link>
        <Link href="/white-paper"><h4>White Paper</h4></Link>
        <Link href="/projects"><h4>Projects</h4></Link>
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
