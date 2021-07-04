import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(32),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  contactGrid: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.secondary.main,
  },
  contactText: {
    paddingTop: theme.spacing(4),
    width: "60%",
    color: "#ffffffbb",
  },
  buttons: {
    textTransform: "none",
    marginTop: theme.spacing(8),
    fontSize: "1.2em",
  },
}));

export default function ContactMe() {
  const classes = useStyles();

  return (
    <Container id="contact" className={classes.container}>
      <div align="center">
        <Typography variant="h3" className={classes.title}>
          Get in Touch
        </Typography>
        <Typography variant="h6" className={classes.contactText}>
          My inbox is always open! If you have a question or just want to say
          hi, I'll try my best to get back to you!
        </Typography>
        <Button
          variant="outlined"
          className={classes.buttons}
          color="secondary"
        >
          Say Hello
        </Button>
      </div>
    </Container>
  );
}
