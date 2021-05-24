import React from 'react'
import {Grid, Paper, Box, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Email from '../components/Email';
import Mission from '../components/Mission';
import Timer from '../components/Timer';
import Statement from '../components/Statement';
import WhatWeDo from '../components/WhatWeDo';
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

  emailTitle: {
    width: "30%",
    [theme.breakpoints.down('sm')] : {
      width: "100%"
    }
  },

  mission: {
    padding: "1.5rem 0",
    display: "flex",
    backgroundImage: `url('/images/pina.jpg')`,
    backgroundSize: "cover"
  },

  timer: {
    padding: "1.5rem 0",
    [theme.breakpoints.down('xs')] : {
      padding: "0.5rem 0"
    } 
  },

  contentText: {
    fontFamily: "FuturaBold",
    fontSize: "1.5rem"
  },

  dialog: {
    backgroundColor: "#48644c",
    padding: "3rem"
  },

  dialogButton: {
    color: "#000",
    marginRight: "1rem",
    [theme.breakpoints.down('xs')] : {
      margin: "0.2rem"
    }
  },

  statement: {
    margin: "1rem auto",
    width: "90%",
    padding: "1.5rem"
  }
}))

const IndexPage = () => {
  const classes = useStyles();
  return (
  <>
    <Layout title="Home | VeganAfrica">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.statement} elevation={0} >
            <Statement />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.statement} elevation={0}>
            <WhatWeDo />
          </Paper>
        </Grid>
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
          <Box display="flex" flexDirection="column" marginY="2rem" alignItems="center" >
          <Typography variant="h6" align="center" className={classes.emailTitle}>Reach out to get involved as a collaborator, advisor or donor!</Typography>
            <Paper variant="outlined" square className={classes.email}>
              <Email />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
)}



export default IndexPage
