import { Container, Grid, makeStyles } from "@material-ui/core";
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

  const repoList = [
    { repoName: "shopping-android-app", projName: "Shopping App" },
    { repoName: "ds-algo-web", projName: "DS & Algo Web"},
    { repoName: "crowdsourcing-blockchain", projName: "CrowdsourceIt!"},
    { repoName: "movie-data-android-app", projName: "Movie Data App"},
    { repoName: "csgo-league-admin", projName: "CS:GO League Auction App"},
    { repoName: "knowmyprof", projName: "Know My Professor"},
  ];

  return (
    <Container className={classes.container}>
      <ComponentHeading title="Some Projects I've Built" />
      <Grid container className={classes.proGrids} spacing={2}>
        {repoList &&
          repoList.map((repo, i) => {
            return (
              <Grid item key={`card-repo-${i}`}>
                <ProjectCard repoName={repo.repoName} projName={repo.projName} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
