"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "../components/theme";
import TopNavBar from "../components/TopNavBar";

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar />
      <Container maxWidth="xl">
        <Box p={1} pt={2}>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
