import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import { green } from '@material-ui/core/colors';

type Props = {
  children?: ReactNode
  title?: string
}

const BootstrapButton = withStyles({
  root: {
    margin: "0.6rem 0.3rem 0 0.3rem",
    '&:hover': {
      backgroundColor: green[500],
      color: "#fff"
    },
    '&:focus': {
      border: '2px solid',
      borderColor: "#fff"
    },
  },
})(Button);


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/" passHref>
          <BootstrapButton variant = "outlined" color="primary">Home</BootstrapButton>
        </Link>
        <Link href="/give" passHref>
          <BootstrapButton variant = "outlined" color="primary">Give</BootstrapButton>
        </Link>
        <Link href="/info" passHref>
          <BootstrapButton variant = "outlined" color="primary">Info</BootstrapButton>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
