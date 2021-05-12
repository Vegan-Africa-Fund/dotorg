import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Button} from '@material-ui/core';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    accordion: {
        backgroundColor: "#f2fff0",
    },
    summary: {
        paddingLeft: "0",
    },
    statement: {
        fontFamily: "FuturaLight",
        fontSize: "1.2rem"
    }
  }),
);

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion elevation={0} className={classes.accordion}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Button>Read more</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.statement}>
          I began personally impact investing in early 2021 and feel an incredible sense of fulfillment from supporting initiatives that are changing the world and dietary habits on the fastest-growing continent on earth. I believe part of my mission on earth is to redistribute wealth and help people see the vision I have for the future - a kinder, plant-based planet that will allow for beautiful human evolution for decades to come. I previously worked as an outreach director for the New York Public Interest Research Group (NYPIRG) and the Andrew Yang 2020 presidential campaign. I’m the author and publisher of Sunny Payne’s Soy-Free Vegan Cookbook (available on Amazon).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
