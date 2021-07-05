import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ComponentHeading from "./ComponentHeading";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(36),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(12),
    },
  },
  proGrids: {
    paddingTop: theme.spacing(8),
  },
}));

export default function Projects() {
  const classes = useStyles();

  const repoList = [
    {
      repoName: "shopping-android-app",
      projName: "Shopping App",
      projImage:
        "https://github.com/i-vishi/shopping-android-app/raw/master/snapshots/shopping-home-customer.png",
    },
    {
      repoName: "ds-algo-web",
      projName: "DS & Algo Web",
      projImage:
        "https://github.com/i-vishi/ds-algo-web/raw/main/assets/snapshots/homepage.png",
    },
    {
      repoName: "crowdsourcing-blockchain",
      projName: "CrowdsourceIt!",
      projImage:
        "https://github.com/i-vishi/crowdsourcing-blockchain/raw/main/snapshots/home.png",
    },
    {
      repoName: "movie-data-android-app",
      projName: "Movie Data App",
      projImage:
        "https://github.com/i-vishi/movie-data-android-app/raw/master/snapshots/home.png",
    },
    {
      repoName: "csgo-league-admin",
      projName: "CS:GO League Auction App",
      projImage:
        "https://github.com/i-vishi/csgo-league-admin/raw/master/snapshots/home.png",
    },
    {
      repoName: "knowmyprof",
      projName: "Know My Professor",
      projImage:
        "https://github.com/i-vishi/knowmyprof/raw/master/snapshots/home.png",
    },
  ];

  return (
    <Container id="projects" className={classes.container}>
      <ComponentHeading title="Some Projects I've Built" />
      <Grid
        container
        className={classes.proGrids}
        spacing={4}
        justify="space-around"
        alignItems="center"
      >
        {repoList &&
          repoList.map((repo, i) => {
            return (
              <Grid item key={`card-repo-${i}`}>
                <ProjectCard
                  repoName={repo.repoName}
                  projName={repo.projName}
                  projImage={repo.projImage}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
