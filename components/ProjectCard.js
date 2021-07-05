import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    backgroundColor: "#00344899",
    height: 390,
    "&:hover": {
      backgroundColor: "#00546899",
    },
  },
  cardContent: {
    height: 310,
  },
  projImage: {
    marginTop: theme.spacing(3),
    height: 200,
    maxWidth: "90%",
    margin: "auto",
    objectFit: "contain",
    position: "relative",
  },
  projDescription: {
    color: "#ffffffbb",
    marginTop: theme.spacing(1.5),
  },
  topics: {
    padding: theme.spacing(2),
    color: "#ffffff",
  },
  topicBorder: {
    fontSize: "0.7rem",
    padding: theme.spacing(1),
  },
}));

function ProjectCard(props) {
  const { repoName, projName, projImage } = props;

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
          setProjUrl(res.data.html_url);
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
      <CardActionArea href={projUrl}>
        <div className={classes.cardContent}>
          <div className={classes.projImage}>
            <Image
              src={projImage}
              alt={projName}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardContent>
            <Typography variant="h5" color="secondary">
              {projName}
            </Typography>
            <Typography variant="body1" className={classes.projDescription}>
              {projDesc}{" "}
            </Typography>
          </CardContent>
        </div>
        <CardActions className={classes.topics}>
          {projTopics &&
            projTopics.map((topic, i) => {
              return (
                <Typography
                  variant="overline"
                  key={`proj-${projName}-${i}`}
                  className={classes.topicBorder}
                >
                  {topic}
                </Typography>
              );
            })}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
