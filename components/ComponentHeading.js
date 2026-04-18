import React from "react";
import { Typography, Box } from "@mui/material";

const ComponentHeading = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          pr: 4,
          display: "flex",
          whiteSpace: "nowrap",
          color: "secondary.main",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "monospace", fontWeight: 600 }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid white",
          width: { xs: "75%", md: "50%" },
        }}
      />
    </Box>
  );
};

export default ComponentHeading;
