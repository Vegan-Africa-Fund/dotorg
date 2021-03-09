import Link from 'next/link'
import Layout from '../components/Layout'

const GivePage = () => (
  <Layout title="Give">
    <h1>Give</h1>
    <p>This is the give page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default GivePage