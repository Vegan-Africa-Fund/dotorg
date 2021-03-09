import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles';
import {Button, Box} from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import Footer from './Footer';
import {buttons} from '../store/buttons'

type Props = {
  children?: ReactNode
  title?: string
}

const BootstrapButton = withStyles({
  root: {
    margin: "0.6rem 0.3rem 0 0.3rem",
    textTransform: "none",
    fontSize: "1.2rem",
    border: "2px solid #2ecc71",
    '&:hover': {
      backgroundColor: green[500],
      color: "#fff"
    },
    '&:focus': {
      border: '2px solid',
      borderColor: "#fff"
    },
  }
})(Button);


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        {buttons.map(button => (
                  <Link key={button.id} href={button.url} passHref>
                  <BootstrapButton variant = "outlined" color="primary">{button.name}</BootstrapButton>
                </Link>
        ))}
      </nav>
    </header>
    <Box
    width="75%"
    mx="auto"
    lineHeight={3}
    mb="4rem"
    >
    {children}
    </Box>
    <footer>
      <Footer />
    </footer>
  </>
)

export default Layout
