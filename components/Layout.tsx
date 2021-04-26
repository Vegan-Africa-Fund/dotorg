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
    [theme.breakpoints.down('sm')] : {
      display: "none"
    },
    '& h4': {
      borderLeft: "1px solid black",
      width: "25%",
      textAlign: "center",
      fontSize: "1.2rem",
      fontWeight: "400"
    },
    '& h4:first-child': {
      borderLeft: "0"
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
        <Link href="#"><h4>Current Projects</h4></Link>
        <Link href="#"><h4>Blog</h4></Link>
        <Link href="#"><h4>Proposed Projects</h4></Link>
        <Link href="#"><h4>Donate</h4></Link>
      </nav>
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
        <MenuItem onClick={handleClose}>Current Projects</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Proposed Projects</MenuItem>
        <MenuItem onClick={handleClose}>Donate</MenuItem>
      </Menu>
      </Box>
    </header>
    <Box
    width="75%"
    mx="auto"
    lineHeight={4}
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
