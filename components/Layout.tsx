import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Button} from '@material-ui/core'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className={styles.container}>
        <Link href="/" passHref>
          <button className = {styles.btn}>Home</button>
        </Link>
        <Link href="/give" passHref>
          <Button variant = "outlined" color="primary">Give</Button>
        </Link>
        <Link href="/info" passHref>
          <button>Info</button>
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
