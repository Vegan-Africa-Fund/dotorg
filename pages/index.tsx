import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import cookie from 'js-cookie'
import {Grid, Paper, Box, IconButton, Button, Dialog, DialogContent, DialogContentText} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
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
  }
}))

const IndexPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log(cookie.get("token") === undefined)
  useEffect(() => {
    if(cookie.get("token") === undefined) {
      setTimeout(() => {
        setOpen(true)
      }, 1500)
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    cookie.set("token", "popup", {expires: 1})
  };
  return (
  <>
    <Dialog open={open} onClose={handleClose} fullWidth={true} aria-labelledby="form-dialog-title">
        <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
        </Box>
        
        <DialogContent className={classes.dialog} >
          <DialogContentText className={classes.contentText}>
            JOIN THE COMMUNITY
          </DialogContentText>
          <Link href="/invest">
            <Button  onClick={handleClose} variant="contained" className={classes.dialogButton}>
              Invest
            </Button>
          </Link>
          <Link href='/donate'>
            <Button onClick={handleClose} variant="contained" className={classes.dialogButton}>
                Donate
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
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
  </>
)}



export default IndexPage
