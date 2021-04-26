import {Grid, Paper, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import Email from '../components/Email'
import Mission from '../components/Mission'

const useStyles = makeStyles(theme => ({
  email: {
    padding: "0.8rem",
    width: "30%",
    backgroundColor: "#81c784",
    [theme.breakpoints.down('sm')] : {
      width: "100%",
      margin: "0 1rem"
    }
  },

  mission: {
    padding: "1.5rem 0",
    display: "flex",
    justifyContent: "flex-end"
  }
})) 

const IndexPage = () => {
  const classes = useStyles();

  return (
  <Layout title="Home | VeganAfrica">
    <Grid container>
      <Grid item xs={12}>
        <Box display="flex" marginY="2rem" justifyContent="center" >
          <Paper variant="outlined" square className={classes.email}>
            <Email />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Paper className={classes.mission} variant="outlined" square>
            <Mission />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Layout>
)}

export default IndexPage
