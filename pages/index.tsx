import React from 'react'
import {Grid, Paper, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Email from '../components/Email';
import Mission from '../components/Mission';
import Timer from '../components/Timer'

const useStyles = makeStyles(theme => ({
  email: {
    padding: "0.8rem",
    width: "30%",
    backgroundColor: "#88a283",
    [theme.breakpoints.down('sm')] : {
      width: "100%",
      margin: "0 1rem"
    }
  },

  mission: {
    padding: "1.5rem 0",
    display: "flex",
    justifyContent: "flex-end"
  },

  timer: {
    padding: "1.5rem 0"
  }
}))

const IndexPage = () => {
  const classes = useStyles();
  return (
  <Layout title="Home | VeganAfrica">
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.timer} variant="outlined" square>
          <Timer />
        </Paper>
      </Grid>
      <Grid item xs={12}>
          <Paper className={classes.mission} variant="outlined" square>
            <Mission />
          </Paper>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" marginY="2rem" justifyContent="center" >
          <Paper variant="outlined" square className={classes.email}>
            <Email />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Layout>
)}

export default IndexPage
