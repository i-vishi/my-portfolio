import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  topGrids: {
    marginTop: theme.spacing(12),
  },
  myImage: {
    width: theme.spacing(48),
    height: theme.spacing(48),
  },
  imageGrid: {
    textAlign: "right",
  },
}));
export default function About() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.topGrids}>
        <Grid item xs={12} lg={8}>
          <Typography variant="h5">Hi, I am</Typography>
          <Typography variant="h1">Vishal Gaur.</Typography>
          <Typography variant="h2">I build amazing softwares.</Typography>
          <Typography variant="h6">
            I am a Software Engineer specialized in Web Development and Android
            Development with Kotlin. Currently, I am SDE at Paytm(One97
            Communications Ltd.) working with their Android Team.
          </Typography>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <Avatar
            alt="Vishal Gaur"
            src="/assets/vg-image.png"
            className={classes.myImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
