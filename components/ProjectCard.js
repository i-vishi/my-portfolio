import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    backgroundColor: "#00344899",
  },
  projImage: {
    height: 150,
  },
}));

export default function ProjectCard(props) {
  const { projName, projDesc } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea />
      <CardContent>
        <Typography variant="h5" color="secondary">
          {projName}
        </Typography>
        <Typography variant="body1">{projDesc}</Typography>
        <Typography variant="overline">Nodejs React Vuejs</Typography>
      </CardContent>
    </Card>
  );
}
