import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles';
import {Button, Box} from '@material-ui/core'
import Footer from './Footer';
import {buttons} from '../store/buttons'

type Props = {
  children?: ReactNode
  title?: string
}

const BootstrapButton = withStyles({
  root: {
    margin: "0.6rem 0.3rem 0 0.3rem",
    fontSize: "1.2rem",
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
    lineHeight={4}
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
