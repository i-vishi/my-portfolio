import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";

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
    margin: theme.spacing(4, 0, 4, 8),
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
    marginLeft: theme.spacing(8),
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
    </div>
  );
}
