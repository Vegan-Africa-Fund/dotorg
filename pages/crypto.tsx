import React, {useState} from 'react'
import {TextField, Button, Box, Snackbar} from "@material-ui/core"
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


const Crypto = () => {
    const classes = useStyles();
    const [cryptoName, setCryptoName]=useState('')
    const [crypto, setCrypto]=useState('')
    const [open, setOpen] = useState(false)

    const Alert = (props: AlertProps) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
        setOpen(false)
      }

    const emailData = {
        cryptoName,
        crypto
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            database.ref('Crypto').push(emailData)
            setCrypto('')
            setCryptoName('')
            setOpen(true)
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <TextField
            placeholder="Enter crypto name"
            fullWidth
            required
            variant="outlined"
            type="string"
            value={cryptoName}
            onChange={(e) =>{setCryptoName(e.target.value)}}
            className={classes.input}
            />
            <TextField
            placeholder="Enter crypto string"
            fullWidth
            required
            variant="outlined"
            type="string"
            value={crypto}
            onChange={(e) =>{setCrypto(e.target.value)}}
            className={classes.input}
            />
            <Box display="flex" justifyContent="center">
                <Button color="primary" variant="contained" size="large" type="submit">Add Crypto</Button>
            </Box>
        </form>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Sign-up successful!
            </Alert>
        </Snackbar>

    </>
)}

export default Crypto