import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Box, Typography, Grid, Divider, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import CryptoButton from '../components/CryptoButton'
import {buttons} from '../store/buttons'
import database from '../firebase/firebase'

require('dotenv').config()

const useStyles = makeStyles(theme => ({
    grid: {
        width: "90%",
        margin: "1rem auto",
        [theme.breakpoints.down('sm')] : {
            width: "100%"
          }
    },
    button: {
        border: "1px solid #88a384"
    },

    paypal: {
        width: "50%",
        margin: "1rem auto",
        [theme.breakpoints.down('xs')] : {
            width: "90%"
        }
    },
    title: {
        [theme.breakpoints.down('sm')] : {
            marginTop: "2rem"
          } 
    }
}))


const Donate = () => {

    const classes = useStyles();
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        database.ref('Crypto').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                setCryptoData(prev => [...prev, {id: childSnapshot.key, ...childSnapshot.val()}])
            })
        })
    }, [])

    const url = (crypto) => {
        const word = crypto.toLowerCase()
        return `/icons/${word}.png`
    }
    const createOrder = (data, actions) => {
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                amount: {
                    value: "0.2"
                }
            }]
        })
    }

    const onApprove = (data, actions) => {
        console.log(data)
        return actions.order.capture();
    }

    return (
        <Box>
            <Box position= "relative" top="1rem" left="1rem" width="50%">
                <Link href="/">
                    <IconButton className={classes.button} color="primary">
                        <CloseIcon />
                    </IconButton>
                </Link>
            </Box>
        <Typography className={classes.title} variant="h4" align="center">Donate to the Vegan Africa Fund</Typography>
        <Grid container spacing={1} className={classes.grid}>
           {cryptoData.map(crypto => (
               <Grid item xs={3} sm={2} key={crypto.id}>
                   <Box display="flex" justifyContent="center" py="0.5rem">
                    <CryptoButton btn={crypto.cryptoName} icon={url(crypto.cryptoName)} address={crypto.crypto} />
                   </Box>
               </Grid>
           ))}
        </Grid>
        <Divider />
        <Box className={classes.paypal}>
        <PayPalScriptProvider options={{ "client-id": `${process.env.CLIENT_ID}` }}>
            <Box>
                <PayPalButtons 
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}/>
            </Box>
        </PayPalScriptProvider>
        </Box>
        </Box>
    )
}

export default Donate