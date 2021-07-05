import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(36),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(16),
    },
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid #00efff",
    width: "100%",
  },
  content: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    display: "flex",
    whiteSpace: "nowrap",
    color: "#ffffffbb",
  },
  gitLink: {
    color: "#ffffffbb",
    textDecoration: "none",
    fontFamily: "monospace",
    "&:hover": {
      color: "#00efff",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container id="contact" className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.border} />
        <span className={classes.content}>
          <Typography variant="subtitle1" className={classes.titleText}>
            <a
              href="https://github.com/i-vishi/my-portfolio"
              target="_blank"
              className={classes.gitLink}
            >
              Built by Vishal Gaur
            </a>
          </Typography>
        </span>
        <div className={classes.border} />
      </div>
    </Container>
  );
}
