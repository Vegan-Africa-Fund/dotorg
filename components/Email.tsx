import React from 'react'
import {TextField, Button, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: "#fff",
    },

    button: {
        color: "#fff",
        fontSize: "1.5rem",
        letterSpacing: "3px"
    }
}))

const Email = () => {
    const classes = useStyles();
    return (
    <>
        <TextField 
        placeholder="Enter Your Email" 
        fullWidth
        variant="outlined"
        className={classes.input}
        />
        <Box display="flex" justifyContent="center">
            <Button className={classes.button} size="large">SIGN UP</Button>
        </Box>
    </>
)}

export default Email