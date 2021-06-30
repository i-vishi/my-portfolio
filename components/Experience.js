import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Box,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import ComponentHeading from "./ComponentHeading";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(24),
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(12),
  },
  expGrids: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  compTab: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    border: "0",
    borderLeft: "3px solid #3d3d3d55",
    "&:hover": {
      backgroundColor: "#00344899",
    },
  },
  selectedTab: {
    padding: theme.spacing(4),
    backgroundColor: "#00344899",
    border: "0",
    borderLeft: "3px solid #00e5ff",
  },
  compDescription: {
    paddingLeft: theme.spacing(4),
    margin: theme.spacing(1),
  },
}));

export default function Experience() {
  const classes = useStyles();

  const data = [
    {
      name: "Paytm",
      id: "paytm-2",
      position: "Software Engineer - Android",
      url: "https://paytm.com",
      timePeriod: "July 2021 - Present",
      description: [
        "Working as Android Developer",
        "Some more points",
        "Some more points",
      ],
    },
    {
      name: "Paytm",
      id: "paytm-1",
      position: "SDE Intern (Android)",
      url: "https://paytm.co",
      timePeriod: "January 2021 - June 2021",
      description: [
        "Worked as an Intern in Android Team",
        "Learned Kotlin and Android and made some projects assigned as tasks during my internship.",
        "Some applications built during internship - Movie Data App, Shopping App, etc",
      ],
    },
    {
      name: " MathWorks",
      id: "mathworks-1",
      position: "Intern - EDG",
      url: "https://mathworks.com",
      timePeriod: "May 2020 - July 2020",
      description: [
        "Implemented a Simulink Model Randomizer for PLC Controller.",
        "Refactored the code and made it efficient.",
        "Learned MATLAB and Simulink to build the project.",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(data[0]);

  return (
    <Container className={classes.container}>
      <ComponentHeading title="My Experience" />
      <Grid container className={classes.expGrids}>
        <Grid item xs={3} container direction="column">
          {data &&
            data.map((company, i) => {
              return (
                <Grid item key={`company-panel-${i}`}>
                  <Paper
                    variant="outlined"
                    square
                    className={
                      company.id == selectedJob.id
                        ? classes.selectedTab
                        : classes.compTab
                    }
                    onClick={() => {
                      setSelectedJob(company);
                    }}
                  >
                    {company.name}
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
        <Grid item xs={9}>
          <Box p={1} m={1} className={classes.compDescription}>
            <Typography variant="h5">
              {selectedJob.position} @ {selectedJob.name}
            </Typography>
            <Typography variant="body1">{selectedJob.timePeriod}</Typography>
            <Typography variant="h6">
              <ul>
                {selectedJob.description.map((descLine, i) => {
                  return <li key={`job-desc-${i}`}>{descLine}</li>;
                })}
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}