import React, { useState} from 'react';
import { Button, Snackbar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {CopyToClipboard} from 'react-copy-to-clipboard'

const useStyles = makeStyles(() => ({
  button: {
      padding: "0.5rem",
  }
}))

export interface AddressProps {
    address: string
}


const AddressToCopy = () => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false)

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  const handleCopy = () => {
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
    }, 2000)
    }

  return (
  <>
    <CopyToClipboard 
    text="bc1qnqyuuvtcg96pej70ldh9lqhu7wd65ksl76gme6"
    onCopy={handleCopy}
    >
    <Button 
    variant = "outlined" 
    color="primary" 
    className={classes.button}
    disabled={copied} 
    onClick={handleClick}>bc1qnqyuuvtcg96pej70ldh9lqhu7wd65ksl76gme6</Button>
    </CopyToClipboard>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Address is copied!
        </Alert>
    </Snackbar>
  
  </>
)}

export default AddressToCopy