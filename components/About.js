import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  topGrids: {
    marginTop: theme.spacing(14),
  },
  myImage: {
    minHeight: theme.spacing(64),
    minWidth: theme.spacing(64),
  },
  imageGrid: {
    height: "100%",
  },
  buttons: {
    textTransform: 'none',
    marginTop: theme.spacing(12),
    fontSize: "1.25em"
  },
}));
export default function About() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.topGrids}>
        <Grid item xs={12} lg={8}>
          <Box>
            <Typography variant="h5">Hi, I am</Typography>
            <Typography variant="h1">Vishal Gaur.</Typography>
            <Typography variant="h2">I build amazing softwares.</Typography>
            <Typography variant="h6">
              I am a Software Engineer specialized in Web Development and
              Android Development with Kotlin. Currently, I am SDE at
              Paytm(One97 Communications Ltd.) working with their Android Team.
            </Typography>
            <Button variant="outlined" className={classes.buttons} color="secondary">Get In Touch</Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="flex-end" alignItems="center" className={classes.imageGrid}>
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
