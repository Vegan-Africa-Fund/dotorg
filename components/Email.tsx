import React, {useState} from 'react'
import {TextField, Button, Box, Snackbar} from "@material-ui/core"
import Recaptcha from "react-recaptcha";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import database from '../firebase/firebase';


const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: "#f8fff7",
    },

    button: {
        color: "#f8fff7",
        fontSize: "1.5rem",
        letterSpacing: "3px"
    }
}))


const Email = () => {
    const classes = useStyles();
    const [email, setEmail]=useState('')
    const [open, setOpen] = useState(false)
    const [verified, setVerified] = useState(false)

    console.log(verified)

    const Alert = (props: AlertProps) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
        setOpen(false)
      }

    const emailData = {
        email
    }

    const recaptchaLoaded = () => {
        console.log("Captcha successfully loaded.")
    }

    const verify = (response: any) => {
        if(response) setVerified(true)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            database.ref('Veganafrica').push(emailData)
            setEmail('')
            setOpen(true)
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <TextField
            placeholder="Enter Your Email"
            fullWidth
            required
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
            className={classes.input}
            />
             <Box>
                <Recaptcha
                    sitekey={process.env.RECAPTCHA_SITE_KEY}
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verify}
                />
            </Box>
            <Box display="flex" justifyContent="center">
                <Button className={classes.button} size="large" type="submit">SIGN UP</Button>
            </Box>
        </form>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Sign-up successful!
            </Alert>
        </Snackbar>

    </>
)}

export default Email
