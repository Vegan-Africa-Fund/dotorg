import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Divider, Grid, Avatar} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import Layout from '../components/Layout';
import {projects} from '../store/projects'

const useStyles = makeStyles(theme => ({
  divider: {
    position: "relative",
    top: "2rem",
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
},
titleGrid: {
  width: "80%",
  margin: "0 auto"
},
bodyGrid: {
  width: "95%",
  margin: "0 auto"
},
pageTitle: {
  fontFamily: "MoonTime",
  fontSize: "2.3rem",
},
purple: {
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
},
project: {
  display: "flex"
},
statement: {
  fontFamily: "FuturaLight",
  fontSize: "1.2rem",
}
}))

const CurrentProjects = () => {
  const classes = useStyles();
  return (
    <Layout title="Projects | Vegan AF">
      <Grid className={classes.titleGrid} container>
        <Grid item lg={5} md={4}>
                <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
            <Box fontWeight="fontWeightBold">
              <Typography className={classes.pageTitle} variant="h6" align="center">Current Projects</Typography>
            </Box>
        </Grid>
        <Grid item lg={5} md={4}>
            <Divider className={classes.divider} />
        </Grid>
      </Grid>
      <Grid className={classes.bodyGrid} container spacing={3}>
        {projects.map(project => (
          <Grid key={project.id} item xs={12} sm={6}>
            <Box className={classes.project}>
              <Avatar className={classes.purple}>{project.index}</Avatar>
            <Box ml="1.5rem">
               <Typography variant="h6" component="a" href={project.url} target="_blank">{project.name}</Typography>
              <Typography className={classes.statement} variant="body2">{project.info}</Typography>
            </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }} mt="1rem">
              <Divider />
            </Box>
          </Grid>
        ))}
        </Grid>
    </Layout>
  )
}

export default CurrentProjects