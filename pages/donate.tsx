import React from 'react'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Box, Typography, Button} from '@material-ui/core'
import styles from '../styles/404.module.css'
import CryptoButton from '../components/CryptoButton'
import {buttons} from '../store/buttons'

require('dotenv').config()


const Donate = () => {

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
        <Box>
           {buttons.map(button => (
               <CryptoButton key={button.id} btn={button.name} icon={button.url} />
           ))}
        </Box>
        <Box  width="50%" mx="auto">
            <Link href="/">
            <Button variant="outlined" color="primary">Go home</Button>
            </Link>
        </Box>
        </Box>
    )
}

export default Donate