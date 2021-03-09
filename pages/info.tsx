import Link from 'next/link'
import Layout from '../components/Layout'

const InfoPage = () => (
  <Layout title="Info">
    <h1>Info</h1>
    <p>This is the info page.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default InfoPage
