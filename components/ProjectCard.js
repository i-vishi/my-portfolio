import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

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

  const [projUrl, setProjUrl] = useState();
  const [projDesc, setProjDesc] = useState();
  const [projTopics, setProjTopics] = useState();

  useEffect(() => {
    const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
    octokit.rest.repos
      .get({
        owner: process.env.USERNAME,
        repo: repoName,
      })
      .then(
        (res) => {
          console.log(res.data);
          setProjUrl(res.data.url);
          setProjDesc(res.data.description);
        },
        (err) => {
          console.log(`error is ${err}`);
        }
      );

    octokit.rest.repos
      .getAllTopics({
        owner: process.env.USERNAME,
        repo: repoName,
      })
      .then(
        (res) => {
          console.log(res.data);
          setProjTopics(res.data.names);
        },
        (err) => {
          console.log(`error is ${err}`);
        }
      );
  }, []);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea />
      <CardContent>
        <Typography variant="h5" color="secondary">
          {projName}
        </Typography>
        <Typography variant="body1">{projDesc} </Typography>
        {projTopics && (
          <Typography variant="overline">{projTopics.toString()}</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
