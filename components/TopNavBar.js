import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  SvgIcon
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
  },
  navLink: {
    padding: theme.spacing(4, 0, 4, 8),
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton edge="start" color="inherit" className={classes.logo}>
              <SvgIcon>
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
              </SvgIcon>
            </IconButton>

            <Typography variant="h5" className={classes.title}>Vishal Gaur</Typography>
            <div className={classes.navLinks}>
              <Typography className={classes.navLink}>About</Typography>

              <Typography className={classes.navLink}>Projects</Typography>

              <Typography className={classes.navLink}>Contact</Typography>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
