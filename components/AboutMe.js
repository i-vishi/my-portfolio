import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Box,
  requirePropFactory,
} from "@material-ui/core";
import React from "react";
import ComponentHeading from "./ComponentHeading";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(36),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(12),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  aboutGrids: {
    paddingTop: theme.spacing(8),
  },
  aboutText: {
    fontSize: "1.15em",
    color: "#ffffffbb",
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  aboutImage: {
    order: 2,
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  myImage: {
    minHeight: theme.spacing(48),
    minWidth: theme.spacing(48),
  },
  skillsList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(180px, 400px))",
    margin: 0,
    overflow: "hidden",
    padding: theme.spacing(4),
  },
  imageGrid: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container id="about" className={classes.container}>
      <ComponentHeading title="About Me" />
      <Grid container className={classes.aboutGrids}>
        <Grid item md={7} sm={12} xs={12} className={classes.aboutText}>
          <Typography variant="body1">
            Hello! My name is Vishal Gaur and I like to build things that run on
            Android and things that live on the internet. I started Web
            Development in the first year of my graduation back in 2017 for
            which I started learning Javascript to build a project for my course
            work. <br />
            Until today, I have worked on many web development projects using
            VueJs and React. I have worked at a huge financial corporation and
            learned Android development and build some projects that have
            Material UI, MVVM Architecture, RoomDB, etc. Currently, I am
            focusing on Blockchain and Golang and working on my Android
            Development skills.
            <br />
            Some technologies I've worked with:
          </Typography>
          <ul className={classes.skillsList}>
            <li>JavaScipt</li>
            <li>Node.js</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Android</li>
            <li>Kotlin</li>
            <li>MongoDB</li>
          </ul>
        </Grid>
        <Grid item md={5} sm={12} xs={12} className={classes.aboutImage}>
          <Box display="flex" alignItems="center" className={classes.imageGrid}>
            <Avatar
              alt="Vishal Gaur"
              src="https://github.com/i-vishi.png?size=500"
              className={classes.myImage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
