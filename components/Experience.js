"use client";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ComponentHeading from "./ComponentHeading";

function Experience() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

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
        "Migrated 15+ Volley APIs to Retrofit and OkHttp, introducing a custom utility for seamless integration, code maintainability, and flexibility for a 10-member team.",
      ],
    },
    {
      name: "Paytm",
      id: "paytm-2",
      position: "Software Engineer - Android",
      url: "https://paytm.com",
      timePeriod: "January 2021 - April 2022",
      description: [
        "Modernized Mobile Recharge and mobile operator selection with a new UI, increasing engagement for over 100 million users.",
        "Implemented a critical feature to handle sudden price changes of mobile operators, ensuring seamless operations, and maximizing customer satisfaction with millions of transactions processed daily.",
        "Collaborated seamlessly with the iOS and web teams of 15 members, actively contributing to the successful implementation of Utility bill payment.",
        "Integrated split bill with Utility Bill payments, enabling convenient expense splitting for more than 1 million transactions.",
        "Demonstrated leadership by leading the team in writing unit and UI tests using JUnit, Espresso, and Mockito, achieving an impressive 50% code coverage and ensuring code quality and robustness.",
      ],
    },
    {
      name: "MathWorks",
      id: "mathworks-1",
      position: "Intern - EDG",
      url: "https://mathworks.com",
      timePeriod: "May 2020 - July 2020",
      description: [
        "Developed a Simulink Model Randomizer for PLC Controller, optimizing system performance and functionality.",
        "Optimized 5000+ lines of code through comprehensive refactoring, ensuring seamless and efficient operation.",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(data[0]);

  const tabSx = {
    p: 4,
    backgroundColor: "primary.main",
    border: "0",
    color: "#ffffffbb",
    fontSize: "1.25em",
    borderLeft: "3px solid #3d3d3d55",
    cursor: "pointer",
    "&:hover": { backgroundColor: "#00344899" },
    ...(isXs && {
      border: "0",
      borderBottom: "3px solid #3d3d3d55",
      pl: 4,
      pr: 4,
    }),
  };

  const selectedTabSx = {
    p: 4,
    backgroundColor: "#00344899",
    color: "#00e5ff",
    border: "0",
    fontSize: "1.25em",
    fontWeight: "600",
    borderLeft: "3px solid #00e5ff",
    cursor: "pointer",
    ...(isXs && {
      border: "0",
      borderBottom: "3px solid #00e5ff",
      pl: 8,
      pr: 8,
    }),
  };

  return (
    <Container
      id="experience"
      sx={{
        pt: { xs: 16, md: 36 },
        pl: { xs: 4, md: 12 },
        pr: { xs: 4, md: 12 },
      }}
    >
      <ComponentHeading title="Places I've worked at" />
      <Grid container sx={{ pt: 8 }}>
        <Grid
          item
          sm={3}
          xs={12}
          container
          direction={isXs ? "row" : "column"}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          {data.map((company, i) => (
            <Grid item key={`company-panel-${i}`}>
              <Paper
                variant="outlined"
                square
                sx={company.id === selectedJob.id ? selectedTabSx : tabSx}
                onClick={() => setSelectedJob(company)}
              >
                {company.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item sm={9} xs={12} sx={{ pt: { xs: 8, sm: 0 } }}>
          <Box
            p={1}
            m={1}
            sx={{ pl: 4, minHeight: 288, color: "#ffffffbb" }}
          >
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              {selectedJob.position}
              <Box component="span" sx={{ color: "#00e5ff" }}>
                &nbsp;@&nbsp;
                <Box
                  component="a"
                  href={selectedJob.url}
                  sx={{ color: "#00e5ff", textDecoration: "none" }}
                >
                  {selectedJob.name}
                </Box>
              </Box>
            </Typography>
            <Typography variant="body1">{selectedJob.timePeriod}</Typography>
            <Typography variant="h6">
              <ul>
                {selectedJob.description.map((descLine, i) => (
                  <li key={`job-desc-${i}`}>{descLine}</li>
                ))}
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Experience;
