import React, {useState, useEffect} from 'react';
import {TextField, Button, Box, Snackbar, IconButton, Collapse, Typography } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Recaptcha from "react-recaptcha";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from 'react-redux'
import {brown} from "@material-ui/core/colors"
import { makeStyles } from '@material-ui/core/styles';
import {getEmailfromDB, addEmailToDB} from '../actions/email'


const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: "#f8fff7",
    },

    button: {
        fontSize: "0.875rem",
        color: "#f8fff7",
    },

    message: {
        color: brown[600]
    },

    textField: {
        margin: "0.4rem 0"
    },
    info: {
        color: "#f8fff7",
        fontSize: "1rem",
        margin: "0.5rem"
    }

}))


const Email = () => {
    const classes = useStyles();
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [comment, setComment]=useState('')
    const [open, setOpen] = useState(false)
    const [verified, setVerified] = useState(false)
    const [emailExist, setEmailExist] = useState(false)
    const [geoDetails, setGeoDetails] = useState({IPv4: ''})


    interface RootState {
        Email: [{
            email: string,
            ipAddress: string
        }]
    }

    const dispatch =useDispatch()
    const allEmails = useSelector((state: RootState)=> state.Email)

    useEffect(() => {
         dispatch(getEmailfromDB())
         fetch("https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7")
         .then(res => res.json())
         .then(data => setGeoDetails(data))
    }, [])

    const session = allEmails.filter(item => item.ipAddress === geoDetails.IPv4).length === 3

    const SuccessfulAlert = (props: AlertProps) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
        setOpen(false)
      }
    

    const emailData = {
        email,
        name,
        ipAddress: geoDetails.IPv4,
        comment: comment === '' ? "No comment" : comment
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
                dispatch(addEmailToDB(emailData))
                setEmail('')
                setName('')
                setComment('')
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
            className={classes.textField}
            InputProps={{
                className: classes.input,
            }}
            />
            <TextField
            placeholder="Enter Your Name"
            fullWidth
            required
            variant="outlined"
            type="string"
            value={name}
            onChange={(e) =>{setName(e.target.value)}}
            className={classes.textField}
            InputProps={{
                className: classes.input,
            }}
            />
            <TextField
            placeholder="Add a comment"
            fullWidth
            multiline
            variant="outlined"
            type="string"
            value={comment}
            rows={4}
            onChange={(e) =>{setComment(e.target.value)}}
            className={classes.textField}
            InputProps={{
                className: classes.input,
            }}
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
                <Button className={classes.button} variant="contained" size="small" color="primary" type="submit" disabled={!verified || session}>
                    Sign up
                </Button>
            </Box>
            <Box display="flex" justifyContent="center">
                <h6 className={classes.info}>Reach out to get involved as a collaborator, advisor or donor!</h6>
            </Box>
            {session ? (
                <Typography className={classes.message} variant="subtitle1">You have surpassed the three sign ups limit. Thank you.</Typography>
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
