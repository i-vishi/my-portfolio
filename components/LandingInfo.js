import {
  Container,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  topInfo: {
    marginTop: theme.spacing(14),
  },
  fullName: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.75em",
    },
  },
  subTitle: {
    color: "#ffffff95",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4em",
    },
  },
  buttons: {
    textTransform: "none",
    marginTop: theme.spacing(12),
    fontSize: "1.25em",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  topDetailPara: {
    width: "50%",
    marginTop: theme.spacing(4),
    color: "#ffffffbb",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function LandingInfo() {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.topInfo}>
        <Typography variant="h5">Hi, I am</Typography>
        <Typography variant="h1" className={classes.fullName}>
          Vishal Gaur.
        </Typography>
        <Typography variant="h2" className={classes.subTitle}>
          I build web apps and android apps.
        </Typography>
        <Typography variant="h6" className={classes.topDetailPara}>
          I am a Software Engineer specialized in Android Development with Kotlin 
          and Web Development. Currently, I am Android Developer at Testbook and in the past I have worked at Paytm(One97
          Communications Ltd.) as Software Engineer (Android).
        </Typography>
        <Button
          variant="outlined"
          className={classes.buttons}
          color="secondary"
          href="mailto:rr.vishalgaur@gmail.com"
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
}
