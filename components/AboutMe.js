import { Container, Grid, Typography, Avatar, Box } from "@mui/material";
import React from "react";
import ComponentHeading from "./ComponentHeading";

export default function About() {
  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 16, md: 36 },
        pl: { xs: 4, md: 12 },
        pr: { xs: 4, md: 12 },
      }}
    >
      <ComponentHeading title="About Me" />
      <Grid container sx={{ pt: 8 }}>
        <Grid
          item
          md={7}
          sm={12}
          xs={12}
          sx={{
            fontSize: "1.15em",
            color: "#ffffffbb",
            order: { xs: 2, md: 1 },
          }}
        >
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
            working at Testbook Edu Solutions Pvt. Ltd. and mainly using Jetpack
            Compose for development.
            <br />
            Some technologies I&apos;ve worked with:
          </Typography>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(180px, 400px))",
              margin: 0,
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <li>Android</li>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
            <li>MVVM</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Git</li>
          </ul>
        </Grid>
        <Grid item md={5} sm={12} xs={12} sx={{ order: { xs: 1, md: 2 } }}>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              height: "100%",
              width: "100%",
              justifyContent: { xs: "center", md: "flex-end" },
              pb: { xs: 6, md: 0 },
            }}
          >
            <Avatar
              alt="Vishal Gaur"
              src="https://github.com/i-vishi.png?size=500"
              sx={{ minHeight: 288, minWidth: 288 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
