import React, {useState} from 'react'
import {API, graphqlOperation} from 'aws-amplify'
import Amplify from 'aws-amplify'
import {TextField, Button, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import amplifyConfig from '../aws-exports'

Amplify.configure(amplifyConfig);

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

const createVegan = `
mutation createVegan($email: String!) {
    createVegan(vegan: {
        email: $email
    }){
        email
        id
    }
}
`

const Email = () => {
    const classes = useStyles();
    const [email, setEmail]=useState('')

    const emailData = {
        email
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await API.graphql(graphqlOperation(createVegan, emailData))
            setEmail('')
        } catch (err) {
            console.log(err)
        }
    }
    return (
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
        <Box display="flex" justifyContent="center">
            <Button className={classes.button} size="large" type="submit">SIGN UP</Button>
        </Box>
    </form>
)}

export default Email
