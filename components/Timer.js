import React, {useState, useEffect, useRef } from 'react'
import {Button, Box, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    timer: {
        justifyContent: "center",
        '& section': {
            width: "10%",
            backgroundColor: "#696969",
            color: "#f8fff7",
            '& p:first-child': {
                margin: "0.5rem 0",
                fontSize: "2.5rem",
                fontFamily: "FuturaExtraBlack",
                textAlign: "center",
                [theme.breakpoints.down('sm')] : {
                    fontSize: "1.5rem"
                }
            },
            '& p:nth-child(2)': {
                marginTop: "0.1rem",
                fontSize: "1rem",
                textAlign: "center",
                fontFamily: "FuturaLight"
            },
            [theme.breakpoints.down('sm')] : {
                width: "100%"
            }
        },
        [theme.breakpoints.down('xs')] : {
            justifyContent: "flex-start"
        }
    },

    button : {
        margin: "0.3rem 0.6rem"
    },

    title: {
        fontFamily: "FuturaCondensedLight"
    }
}))

const Timer = () => {
    const classes = useStyles();
    const [day, setDay] = useState('00')
    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')
    const [second, setSecond] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('July 01, 2021 08:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now

            const timerDays = Math.floor(distance / (1000 * 60 * 60 * 24))
            const timerHours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const timerMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const timerSeconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                setDay(timerDays);
                setHour(timerHours);
                setMinute(timerMinutes);
                setSecond(timerSeconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
             clearInterval(interval.current);
        }
    })

    return (
        <>
            <Typography className={classes.title} variant="h5" align="center">
              VAF Public Sale Launch:
            </Typography>
            <Box display="flex" className = {classes.timer}>
                <section>
                    <p>{day}</p>
                    <p>Days</p>
                </section>
                <section>
                    <p>{hour}</p>
                    <p>Hours</p>
                </section>
                <section>
                    <p>{minute}</p>
                    <p>Minutes</p>
                </section>
                <section>
                    <p>{second}</p>
                    <p>Seconds</p>
                </section>
            </Box>
            <Box display="flex" justifyContent="center">
               <Link href="/invest">
                <Button className={classes.button} variant="contained" color="secondary">Invest</Button>
               </Link>
               <Link href="/donate">
               <Button className= {classes.button} variant="contained" color="secondary">Donate</Button>
               </Link>
            </Box>
        </>
    )
}

export default Timer;
