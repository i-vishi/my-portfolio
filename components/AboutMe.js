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
    paddingTop: theme.spacing(24),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(36),
  },
  aboutGrids: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  aboutText: {
    order: 2,
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
  aboutImage: {
    order: 1,
    [theme.breakpoints.up("sm")]: {
      order: 2,
    },
  },
  myImage: {
    minHeight: theme.spacing(64),
    minWidth: theme.spacing(64),
  },
  imageGrid: {
    height: "100%",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <ComponentHeading title="About Me" />
      <Grid container className={classes.aboutGrids}>
        <Grid item lg={6} xs={12} className={classes.aboutText}>
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
          </Typography>
          <Typography variant="body1">
            Some technologies I've worked with:
            <Grid container>
              <Grid item xs={6}>
                <ul class="a">
                  <li>JavaScipt</li>
                  <li>Node.js</li>
                  <li>Vue.js</li>
                  <li>React</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul class="a">
                  <li>Next.js</li>
                  <li>Android</li>
                  <li>Kotlin</li>
                  <li>MongoDB</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item lg={6} xs={12} className={classes.aboutImage}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.imageGrid}
          >
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
