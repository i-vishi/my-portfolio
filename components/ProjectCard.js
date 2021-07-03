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

function ProjectCard(props) {

  const { repoName, projName } = props;

  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea />
      <CardContent>
        <Typography variant="h5" color="secondary">
          {projName}
        </Typography>
        <Typography variant="body1">jdffgkjg dfsgjdrt yfkdk d</Typography>
        <Typography variant="overline">Nodejs React Vuejs</Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
