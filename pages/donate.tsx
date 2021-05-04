import React from 'react'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Box, Typography, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/404.module.css'
import CryptoButton from '../components/CryptoButton'
import {buttons} from '../store/buttons'

require('dotenv').config()

const useStyles = makeStyles(theme => ({
    grid: {
        width: "90%",
        [theme.breakpoints.down('sm')] : {
            width: "100%"
          }
    }
}))


const Donate = () => {

    const classes = useStyles();

    const createOrder = (data: any, actions: any) => {
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

    const onApprove = (data: any, actions: any) => {
        console.log(data)
        return actions.order.capture();
    }

    return (
        <Box className = {styles.page}>
        <Typography variant="h4" align="center">Donate</Typography>
        <PayPalScriptProvider options={{ "client-id": `${process.env.CLIENT_ID}` }}>
            <Box width="50%" mx="auto" mt="0.7rem">
                <PayPalButtons 
                createOrder={(data: any, actions: any) => createOrder(data, actions)}
                onApprove={(data: any, actions: any) => onApprove(data, actions)}/>
            </Box>
        </PayPalScriptProvider>
        <Grid container spacing={1} className={classes.grid}>
           {buttons.map(button => (
               <Grid item xs={3} sm={2} key={button.id}>
                   <Box display="flex" justifyContent="center" py="0.5rem">
                    <CryptoButton btn={button.name} icon={button.url} address={button.address} />
                   </Box>
               </Grid>
           ))}
        </Grid>
        <Box width="50%" mx="auto" mt="2rem">
            <Link href="/">
            <Button variant="outlined" color="primary">Go home</Button>
            </Link>
        </Box>
        </Box>
    )
}

export default Donate