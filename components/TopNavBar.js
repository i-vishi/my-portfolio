import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Hidden,
  SwipeableDrawer,
  Divider,
  Link,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    margin: theme.spacing(4, 4, 4, 4),
    color: "#ffffff",
    "&:hover": {
      color: "#00efff",
      cursor: "pointer",
    },
  },
  toolbarStyle: {
    minHeight: "80px",
    backgroundColor: "#00243855",
  },
  resumeBtn: {
    margin: theme.spacing(0, 4),
  },
  menuContainer: {
    display: "inline-block",
    cursor: "pointer",
  },
  menuBar1: {
    width: "35px",
    height: "5px",
    backgroundColor: "#00efff",
    margin: "6px 0",
    transition: "0.4s",
  },
  menuBar2: {
    width: "35px",
    height: "5px",
    backgroundColor: "#00efff",
    margin: "6px 0",
    transition: "0.4s",
  },
  menuBar3: {
    width: "35px",
    height: "5px",
    backgroundColor: "#00efff",
    margin: "6px 0",
    transition: "0.4s",
  },
  changeBar1: {
    WebkitTransform: "rotate(-45deg) translate(-8px, 8px)",
    transform: "rotate(-45deg) translate(-8px, 8px)",
  },
  changeBar3: {
    WebkitTransform: "rotate(45deg) translate(-8px, -8px)",
    transform: "rotate(-45deg) translate(-8px, -8px)",
  },
  changeBar2: {
    opacity: 0,
  },
  menuRoot: {
    width: "350px",
    height: "100%",
    flexShrink: 0,
    backgroundColor: "#002438",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 10,
  },
  drawerHeader: {
    display: "flex",
    height: "80px",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    paddingRight: theme.spacing(6),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  linksDiv: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
    display: "flex",
    justifyContent: "space-around",
  },
  footLink: {
    color: "#ffffffbb",
    "&:hover": {
      color: "#00efff",
    },
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

  const [btnState, setBtnState] = useState(false);

  const AnimatedMenuBtn = (
    <div
      className={classes.menuContainer}
      onClick={() => setBtnState(!btnState)}
    >
      <div
        className={`${classes.menuBar1} ${btnState ? classes.changeBar1 : ""}`}
      ></div>
      <div
        className={`${classes.menuBar2} ${btnState ? classes.changeBar2 : ""}`}
      ></div>
      <div
        className={`${classes.menuBar3} ${btnState ? classes.changeBar3 : ""}`}
      ></div>
    </div>
  );

  const menuItems = (
    <div className={classes.menuRoot} role="presentation">
      <div className={classes.drawerHeader}>{AnimatedMenuBtn}</div>
      <Link href="/#about">
        <Typography variant="h5" align="center" className={classes.navLink}>
          About
        </Typography>
      </Link>
      <Link href="/#experience">
        <Typography variant="h5" align="center" className={classes.navLink}>
          Experience
        </Typography>
      </Link>
      <Link href="/#projects">
        <Typography variant="h5" align="center" className={classes.navLink}>
          Projects
        </Typography>
      </Link>
      <Link href="/#contact">
        <Typography variant="h5" align="center" className={classes.navLink}>
          Contact
        </Typography>
      </Link>

      <div align="center" style={{ marginBottom: "48px" }}>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginTop: "20px", padding: "8px" }}
          href="/Resume_Vishal_Gaur.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </div>

      <Divider style={{ background: "#00efff" }} variant="middle" />

      <div className={classes.linksDiv} align="center">
        <Link
          href="https://github.com/i-vishi"
          target="_blank"
          className={classes.footLink}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://linkedin.com/in/i-vishi"
          target="_blank"
          className={classes.footLink}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://twitter.com/iamvishalgaur"
          target="_blank"
          className={classes.footLink}
        >
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarStyle}>
            <IconButton edge="start" color="secondary" className={classes.logo}>
              <Image
                src="/logo-vg.png"
                alt="Vishal Gaur"
                width={40}
                height={40}
              />
            </IconButton>

            <Typography variant="h5" className={classes.title}>
              Vishal Gaur
            </Typography>
            <Hidden smDown>
              <div className={classes.navLinks}>
                <Link href="/#about">
                  <Typography className={classes.navLink}>About</Typography>
                </Link>
                <Link href="/#experience">
                  <Typography className={classes.navLink}>
                    Experience
                  </Typography>
                </Link>
                <Link href="/#projects">
                  <Typography className={classes.navLink}>Projects</Typography>
                </Link>
                <Link href="/#contact">
                  <Typography className={classes.navLink}>Contact</Typography>
                </Link>

                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.resumeBtn}
                  href="/Resume_Vishal_Gaur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </div>
            </Hidden>
            <Hidden mdUp>{AnimatedMenuBtn}</Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <SwipeableDrawer
          anchor="right"
          open={btnState}
          onClose={() => setBtnState(false)}
          onOpen={() => setBtnState(true)}
        >
          {menuItems}
        </SwipeableDrawer>
      </div>
    </div>
  );
}
