import React from "react";
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
  },
  navLink: {
    padding: theme.spacing(4, 0, 4, 8),
    color: "#ffffff",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarStyle: {
    minHeight: "80px",
    backgroundColor: "#00243855",
  },
  resumeBtn: {
    marginLeft: theme.spacing(8),
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

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
            <div className={classes.navLinks}>
              <Link href="/#about">
                <Typography className={classes.navLink}>About</Typography>
              </Link>
              <Link href="/#experience">
                <Typography className={classes.navLink}>Experience</Typography>
              </Link>
              <Link href="/#projects">
                <Typography className={classes.navLink}>Projects</Typography>
              </Link>
              <Link href="/#contact">
                <Typography className={classes.navLink}>Contact</Typography>
              </Link>
            </div>
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
