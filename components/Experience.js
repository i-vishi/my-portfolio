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
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(16),
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
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
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
    {
      name: "Testbook",
      id: "testbook-1",
      position: "SDE-2 - Android",
      url: "https://testbook.com",
      timePeriod: "April 2022 - Present",
      description: [
        "Implemented Jetpack Compose UI to eliminate redundant re-compositions, benefiting over 5 million users.",
        "Introduced Masterclass and Masterseries using Jetpack Compose in a modern MVVM architecture, attracting 50,000+ daily unique visitors for a captivating user experience.",
        "Spearheaded WorkManagers optimization, reducing crashes by 90% (50K to 1K), ensuring a stable user experience for millions.",
        "Pioneered seamless integration of EMI Payment flow using eNACH for Courses, resulting in a 25% boost in revenue. Offered flexible payment options, attracting more customers and increasing sales conversions.",
        "Migrated 15+ Volley APIs to Retrofit and OkHttp, introducing a custom utility for seamless integration, code maintainability, and flexibility for a 10-member team."
      ],
    },
    {
      name: "Paytm",
      id: "paytm-2",
      position: "Software Engineer - Android",
      url: "https://paytm.com",
      timePeriod: "January 2021 - April 2022",
      description: [
        "Modernized Mobile Recharge and mobile operator selection with a new UI,increasing engagement for over 100 million users.",
        "Implemented a critical feature to handle sudden price changes of mobile operators, ensuring seamless operations, and maximizing customer satisfaction with millions of transactions processed daily.",
        "Collaborated seamlessly with the iOS and web teams of 15 members, actively contributing to the successful implementation of Utility bill payment.",
        "Integrated split bill with Utility Bill payments, enabling convenient expense splitting for more than 1 million transactions.",
        "Demonstrated leadership by leading the team in writing unit and UI tests using JUnit, Espresso, and Mockito, achieving an impressive 50% code coverage and ensuring code quality and robustness."
      ],
    },
//     {
//       name: "Paytm (Intern)",
//       id: "paytm-1",
//       position: "SDE Intern (Android)",
//       url: "https://paytm.com",
//       timePeriod: "January 2021 - June 2021",
//       description: [
//         "Worked as an Intern in Android Team",
//         "Learned Kotlin and Android and made some projects assigned as tasks during my internship.",
//         "Some applications built during the internship - Movie Data App, Shopping App, etc",
//       ],
//     },
    {
      name: "MathWorks",
      id: "mathworks-1",
      position: "Intern - EDG",
      url: "https://mathworks.com",
      timePeriod: "May 2020 - July 2020",
      description: [
        "Developed a Simulink Model Randomizer for PLC Controller, optimizing system performance and functionality.",
        "Optimized 5000+ lines of code through comprehensive refactoring, ensuring seamless and efficient operation."
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
