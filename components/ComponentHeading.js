import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid white",
    width: "50%",
  },
  content: {
    paddingRight: theme.spacing(4),
    display: "flex",
    whiteSpace: "nowrap",
    color: theme.palette.secondary.main,
    fontFamily: "Cinzel"
  },
}));

const ComponentHeading = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.content}>
        <Typography variant="h5">
          {title}
        </Typography>
      </span>
      <div className={classes.border} />
    </div>
  );
};

export default ComponentHeading;
