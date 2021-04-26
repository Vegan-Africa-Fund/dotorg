import Layout from '../components/Layout'
import {Grid, Paper} from '@material-ui/core'

const IndexPage = () => (
  <Layout title="Home | VeganAfrica">
    <Grid container>
      <Grid item xs={4}>
        <Paper>
          <h1>Email Get Involved!</h1>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <h3>Mission</h3>
          <h4>The mission statement goes here!</h4>
        </Paper>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
