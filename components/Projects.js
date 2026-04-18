import { Container, Grid } from "@mui/material";
import React from "react";
import ComponentHeading from "./ComponentHeading";
import ProjectCard from "./ProjectCard";

const repoList = [
  {
    repoName: "Prefixer",
    projName: "Prefixer: Android Library",
    projImage:
      "https://github.com/i-vishi/Prefixer/raw/main/snapshots/all_preferences_activity.png",
  },
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
];

export default function Projects() {
  return (
    <Container
      id="projects"
      sx={{ pt: { xs: 16, md: 36 }, pl: 4, pr: 4 }}
    >
      <ComponentHeading title="Some Projects I've Built" />
      <Grid
        container
        sx={{ pt: 8 }}
        spacing={4}
        justifyContent="space-around"
        alignItems="center"
      >
        {repoList.map((repo, i) => (
          <Grid item key={`card-repo-${i}`}>
            <ProjectCard
              repoName={repo.repoName}
              projName={repo.projName}
              projImage={repo.projImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
