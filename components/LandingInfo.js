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
  subTitle: {
    color: "#ffffff95",
  },
  buttons: {
    textTransform: "none",
    marginTop: theme.spacing(12),
    fontSize: "1.25em",
  },
  topDetailPara: {
    width: "50%",
    marginTop: theme.spacing(4),
    color: "#ffffffbb",
  },
}));

export default function LandingInfo() {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.topInfo}>
        <Typography variant="h5">Hi, I am</Typography>
        <Typography variant="h1">Vishal Gaur.</Typography>
        <Typography variant="h2" className={classes.subTitle}>
          I build web apps and android apps.
        </Typography>
        <Typography variant="h6" className={classes.topDetailPara}>
          I am a Software Engineer specialized in Web Development and Android
          Development with Kotlin. Currently, I am SDE at Paytm(One97
          Communications Ltd.) working with their Android Team.
        </Typography>
        <Button
          variant="outlined"
          className={classes.buttons}
          color="secondary"
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
}
