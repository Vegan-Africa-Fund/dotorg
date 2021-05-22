import React, {useState, useEffect} from 'react'
import cookie from 'js-cookie'
import {TextField, Button, Box, Snackbar, IconButton, Collapse, Typography} from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Recaptcha from "react-recaptcha";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from 'react-redux'
import {brown} from "@material-ui/core/colors"
import { makeStyles } from '@material-ui/core/styles';
import database from '../firebase/firebase';
import {getEmailfromDB} from '../actions/email'


const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: "#f8fff7",
    },

    button: {
        color: "#f8fff7",
        fontSize: "1.5rem",
        letterSpacing: "3px"
    },

    message: {
        color: brown[600]
    }

}))


const Email = () => {
    const classes = useStyles();
    const [email, setEmail]=useState('')
    const [open, setOpen] = useState(false)
    const [verified, setVerified] = useState(false)
    const [emailExist, setEmailExist] = useState(false)

    const session = cookie.get("token") !== undefined

    interface RootState {
        Email: [{
            email: string
        }]
    }

    const dispatch =useDispatch()
    const allEmails = useSelector((state: RootState)=> state.Email)

    useEffect(() => {
         dispatch(getEmailfromDB())
    }, [])

    const SuccessfulAlert = (props: AlertProps) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
        setOpen(false)
      }

    const emailData = {
        email
    }

    const recaptchaLoaded = () => {
        console.log("Captcha loaded!")
    }

    const verify = (response: any) => {
        if(response) setVerified(true)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(allEmails.some(item => item.email === email)){
            setEmail('')
            setEmailExist(true)
        } else {
            try {
                database.ref('Veganafrica').push(emailData)
                cookie.set("token", "subscribed")
                setEmail('')
                setEmailExist(false)
                setOpen(true)
            } catch (err) {
                console.log(err)
            }
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
            <Box display="flex" justifyContent="center" mt="0.3rem">
                <Collapse in={emailExist}>
                    <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setEmailExist(false);
                            }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        That email already exists! Please use a different one.
                    </Alert>
                </Collapse>
            </Box>
            <Box display="flex" justifyContent="center">
                <Button className={classes.button} size="large" type="submit" disabled={!verified || session}>SIGN UP</Button>
            </Box>
            {session ? (
                <Typography className={classes.message} variant="subtitle1">Thank you for signing up!</Typography>
            ) : (
                <></>
            )}
                <Box display="flex" justifyContent="center">
                    <Recaptcha
                        sitekey={process.env.RECAPTCHA_SITE_KEY}
                        render="explicit"
                        verifyCallback={verify}
                        onloadCallback={recaptchaLoaded}
                        size={session ? "invisible" : "compact"}
                    />
                </Box>

        </form>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <SuccessfulAlert onClose={handleClose} severity="success">
            Sign-up successful!
            </SuccessfulAlert>
        </Snackbar>

    </>
)}

export default Email
