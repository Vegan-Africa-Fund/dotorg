import {Grid, Paper, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import Email from '../components/Email'

const useStyles = makeStyles(() => ({
  email: {
    padding: "0.8rem",
    width: "30%",
    backgroundColor: "#81c784"
  }
})) 

const IndexPage = () => {
  const classes = useStyles();

  return (
  <Layout title="Home | VeganAfrica">
    <Grid container>
      <Grid item xs={12}>
        <Box display="flex" mt={2} justifyContent="center" >
          <Paper variant="outlined" square className={classes.email}>
            <Email />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <h3>Mission</h3>
          <h4>The mission statement goes here!</h4>
        </Paper>
      </Grid>
    </Grid>
  </Layout>
)}

export default IndexPage
