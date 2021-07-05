import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Paper,
  isWidthDown,
  withWidth,
} from "@material-ui/core";
import React, { useState } from "react";
import ComponentHeading from "./ComponentHeading";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(36),
    paddingLeft: theme.spacing(24),
    paddingRight: theme.spacing(24),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  expGrids: {
    paddingTop: theme.spacing(8),
  },
  tabsGrid: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  descGrid: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(8),
    },
  },
  compTabs: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    border: "0",
    color: "#ffffffbb",
    fontSize: "1.25em",
    borderLeft: "3px solid #3d3d3d55",
    "&:hover": {
      backgroundColor: "#00344899",
    },
    [theme.breakpoints.down("xs")]: {
      border: "0",
      borderBottom: "3px solid #3d3d3d55",
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  selectedTab: {
    padding: theme.spacing(4),
    backgroundColor: "#00344899",
    color: "#00e5ff",
    border: "0",
    fontSize: "1.25em",
    fontWeight: "600",
    borderLeft: "3px solid #00e5ff",
    [theme.breakpoints.down("xs")]: {
      border: "0",
      borderBottom: "3px solid #00e5ff",
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  compDescription: {
    paddingLeft: theme.spacing(4),
    margin: theme.spacing(1),
    minHeight: theme.spacing(48),
    color: "#ffffffbb",
  },
  descCompany: {
    color: "#00e5ff",
  },
  descCompLink: {
    color: "#00e5ff",
    textDecoration: "none",
  },
  descPosition: {
    color: "#ffffff",
  },
}));

function Experience(props) {
  const classes = useStyles();

  const data = [
    // {
    //   name: "Paytm",
    //   id: "paytm-2",
    //   position: "Software Engineer - Android",
    //   url: "https://paytm.com",
    //   timePeriod: "July 2021 - Present",
    //   description: [
    //     "Working as Android Developer",
    //     "Some more points",
    //     "Some more points",
    //   ],
    // },
    {
      name: "Paytm",
      id: "paytm-1",
      position: "SDE Intern (Android)",
      url: "https://paytm.com",
      timePeriod: "January 2021 - June 2021",
      description: [
        "Worked as an Intern in Android Team",
        "Learned Kotlin and Android and made some projects assigned as tasks during my internship.",
        "Some applications built during internship - Movie Data App, Shopping App, etc",
      ],
    },
    {
      name: "MathWorks",
      id: "mathworks-1",
      position: "Intern - EDG",
      url: "https://mathworks.com",
      timePeriod: "May 2020 - July 2020",
      description: [
        "Implemented a Simulink Model Randomizer for PLC Controller and learned Ladder Logic for the task.",
        "Refactored the code to follow Object-Oriented Design and made it efficient.",
        "Learned MATLAB and Simulink to build the project.",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(data[0]);

  return (
    <Container id="experience" className={classes.container}>
      <ComponentHeading title="Places I've worked at" />
      <Grid container className={classes.expGrids}>
        <Grid
          item
          sm={3}
          xs={12}
          container
          direction={isWidthDown("xs", props.width) ? "row" : "column"}
          className={classes.tabsGrid}
        >
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
                        : classes.compTabs
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
        <Grid item sm={9} xs={12} className={classes.descGrid}>
          <Box p={1} m={1} className={classes.compDescription}>
            <Typography variant="h5" className={classes.descPosition}>
              {selectedJob.position}
              <span className={classes.descCompany}>
                &nbsp;@&nbsp;
                <a href={selectedJob.url} className={classes.descCompLink}>
                  {selectedJob.name}
                </a>
              </span>
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

export default withWidth()(Experience);
