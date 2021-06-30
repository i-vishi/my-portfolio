import {
    Container,
    Grid,
    Typography,
    makeStyles,
    Avatar,
    Box,
  } from "@material-ui/core";
  import React from "react";
  import ComponentHeading from "./ComponentHeading";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(32),
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(36),
    },
    proGrids: {
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));
  
  export default function Projects() {
    const classes = useStyles();
  
    return (
      <Container className={classes.container}>
        <ComponentHeading title="Some Projects I've Built" />
        <Grid container className={classes.proGrids}>
            my projects
          </Grid>
      </Container>
    );
  }
  