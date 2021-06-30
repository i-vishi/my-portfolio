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
  topInfo: {
    marginTop: theme.spacing(14),
  },
  buttons: {
    textTransform: "none",
    marginTop: theme.spacing(12),
    fontSize: "1.25em",
  },
  topDetailPara: {
    width: "50%"
  }
}));

export default function LandingInfo() {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.topInfo}>
        <Typography variant="h5">Hi, I am</Typography>
        <Typography variant="h1">Vishal Gaur.</Typography>
        <Typography variant="h2">I build web apps and android apps.</Typography>
        <p className={classes.topDetailPara}>
        <Typography variant="h6">
          I am a Software Engineer specialized in Web Development and Android
          Development with Kotlin. Currently, I am SDE at Paytm(One97
          Communications Ltd.) working with their Android Team.
        </Typography>
        </p>
        <Button
          variant="outlined"
          className={classes.buttons}
          color="secondary"
        >
          Get In Touch
        </Button>
      </Box>
      {/* <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="flex-end" alignItems="center" className={classes.imageGrid}>
            <Avatar
              alt="Vishal Gaur"
              src="https://github.com/i-vishi.png?size=500"
              className={classes.myImage}
            />
          </Box>
        </Grid> */}
    </Container>
  );
}
