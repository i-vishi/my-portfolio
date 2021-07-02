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
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(32),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
  proGrids: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function Projects() {
  const classes = useStyles();

  const data = [
    { name: "Project 1", description: "some deikjkrv ote nn opiet" },
    { name: "Project 2", description: "some deikjkrv ote nn opiet" },
    { name: "Project 3", description: "some deikjkrv ote nn opiet" },
  ];

  return (
    <Container className={classes.container}>
      <ComponentHeading title="Some Projects I've Built" />
      <Grid container className={classes.proGrids} spacing={2}>
        {data &&
          data.map((d, i) => {
            return (
              <Grid item key={i}>
                <ProjectCard projName={d.name} projDesc={d.description} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
