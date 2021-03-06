import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(36),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(16),
    },
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },
  contactText: {
    paddingTop: theme.spacing(4),
    width: "60%",
    color: "#ffffffbb",
  },
  buttons: {
    textTransform: "none",
    marginTop: theme.spacing(8),
    fontSize: "1.15em",
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
          href="mailto:rr.vishalgaur@gmail.com"
        >
          Say Hello
        </Button>
      </div>
    </Container>
  );
}
