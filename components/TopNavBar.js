"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
  Divider,
  Link,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const navLinkSx = {
  m: "24px",
  color: "#ffffff",
  textDecoration: "none",
  "&:hover": { color: "#00efff", cursor: "pointer" },
};

export default function TopNavBar() {
  const theme = useTheme();
  const [btnState, setBtnState] = useState(false);

  const AnimatedMenuBtn = (
    <Box
      sx={{ display: "inline-block", cursor: "pointer" }}
      onClick={() => setBtnState(!btnState)}
    >
      <Box
        sx={{
          width: "35px",
          height: "5px",
          backgroundColor: "#00efff",
          margin: "6px 0",
          transition: "0.4s",
          ...(btnState && {
            WebkitTransform: "rotate(-45deg) translate(-8px, 8px)",
            transform: "rotate(-45deg) translate(-8px, 8px)",
          }),
        }}
      />
      <Box
        sx={{
          width: "35px",
          height: "5px",
          backgroundColor: "#00efff",
          margin: "6px 0",
          transition: "0.4s",
          ...(btnState && { opacity: 0 }),
        }}
      />
      <Box
        sx={{
          width: "35px",
          height: "5px",
          backgroundColor: "#00efff",
          margin: "6px 0",
          transition: "0.4s",
          ...(btnState && {
            WebkitTransform: "rotate(45deg) translate(-8px, -8px)",
            transform: "rotate(-45deg) translate(-8px, -8px)",
          }),
        }}
      />
    </Box>
  );

  const menuItems = (
    <Box
      sx={{
        width: "350px",
        height: "100%",
        flexShrink: 0,
        backgroundColor: "#002438",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          height: "80px",
          alignItems: "center",
          p: theme.spacing(0, 1),
          pr: 6,
          ...theme.mixins.toolbar,
          justifyContent: "flex-end",
        }}
      >
        {AnimatedMenuBtn}
      </Box>
      {["about", "experience", "projects", "contact"].map((section) => (
        <Link key={section} href={`/#${section}`} underline="none">
          <Typography variant="h5" align="center" sx={navLinkSx}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Typography>
        </Link>
      ))}
      <Box align="center" sx={{ mb: "48px" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: "20px", p: "8px" }}
          href="/Resume_Vishal_Gaur.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Box>
      <Divider sx={{ background: "#00efff" }} variant="middle" />
      <Box
        sx={{
          mt: 4,
          p: "12px 24px",
          display: "flex",
          justifyContent: "space-around",
        }}
        align="center"
      >
        <Link href="https://github.com/i-vishi" target="_blank" sx={{ color: "#ffffffbb", "&:hover": { color: "#00efff" } }}>
          <GitHubIcon />
        </Link>
        <Link href="https://linkedin.com/in/i-vishi" target="_blank" sx={{ color: "#ffffffbb", "&:hover": { color: "#00efff" } }}>
          <LinkedInIcon />
        </Link>
        <Link href="https://twitter.com/iamvishalgaur" target="_blank" sx={{ color: "#ffffffbb", "&:hover": { color: "#00efff" } }}>
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ zIndex: theme.zIndex.drawer + 10 }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: "80px", backgroundColor: "#00243855" }}>
            <IconButton edge="start" color="secondary" sx={{ mr: 4 }}>
              <Image src="/logo-vg.png" alt="Vishal Gaur" width={40} height={40} />
            </IconButton>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Vishal Gaur
            </Typography>

            {/* Desktop nav — hidden on xs/sm */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {["about", "experience", "projects", "contact"].map((section) => (
                <Link key={section} href={`/#${section}`} underline="none">
                  <Typography sx={navLinkSx}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Typography>
                </Link>
              ))}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ m: "0 24px" }}
                href="/Resume_Vishal_Gaur.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Box>

            {/* Hamburger — hidden on md+ */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {AnimatedMenuBtn}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={btnState}
        onClose={() => setBtnState(false)}
        onOpen={() => setBtnState(true)}
      >
        {menuItems}
      </SwipeableDrawer>
    </Box>
  );
}
