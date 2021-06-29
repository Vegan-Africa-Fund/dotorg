import React from 'react';
import Head from 'next/head';
import { Box, Button} from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import {SimpleDialog} from '../components/Dialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(theme => ({
    dialog: {
        position: "relative",
    },
    button: {
        border: "1px solid #88a384"
    },

    page: {
        position: "relative",
        top: "4rem",
        width: "66%",
        margin: "0 auto 7rem auto",
        [theme.breakpoints.down('xs')] : {
            width: "95%",
            fontSize: "0.6rem"
        }
    },

    dialogBtn : {
        backgroundColor: blue[100],
    }
}))

 const Invest = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
      };
     return (
    <>
        <Head>
        <title>Invest | Vegan AF</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/images/veganLogo.ico" sizes="144x144"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Box
        className = {classes.page}>
        <h1>Due to international regulations we need to verify some information before you can participate in the pre-sale.</h1>
        <Box mx="auto" display="flex">
            <Button variant="contained" className={classes.dialogBtn} onClick={handleClickOpen}>
                Get In Touch
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </Box>
        </Box>
    </>
)}

export default Invest
