"use client";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import Image from "next/image";

function ProjectCard(props) {
  const { repoName, projName, projImage } = props;

  const [projUrl, setProjUrl] = useState();
  const [projDesc, setProjDesc] = useState();
  const [projTopics, setProjTopics] = useState();

  useEffect(() => {
    const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
    octokit.rest.repos
      .get({ owner: process.env.USERNAME, repo: repoName })
      .then(
        (res) => {
          setProjUrl(res.data.html_url);
          setProjDesc(res.data.description);
        },
        (err) => console.log(`error is ${err}`)
      );

    octokit.rest.repos
      .getAllTopics({ owner: process.env.USERNAME, repo: repoName })
      .then(
        (res) => setProjTopics(res.data.names),
        (err) => console.log(`error is ${err}`)
      );
  }, [repoName]);

  return (
    <Card
      sx={{
        width: 350,
        backgroundColor: "#00344899",
        height: 390,
        "&:hover": { backgroundColor: "#00546899" },
      }}
    >
      <CardActionArea component="a" href={projUrl} sx={{ height: "100%" }}>
        <div style={{ height: 310 }}>
          <div
            style={{
              position: "relative",
              height: 200,
              maxWidth: "90%",
              margin: "auto",
            }}
          >
            <Image
              src={projImage}
              alt={projName}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <CardContent>
            <Typography variant="h5" color="secondary">
              {projName}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#ffffffbb", mt: 1.5 }}
            >
              {projDesc}{" "}
            </Typography>
          </CardContent>
        </div>
        <CardActions sx={{ p: 2, color: "#ffffff" }} disableSpacing>
          {projTopics &&
            projTopics.slice(0, 4).map((topic, i) => (
              <Typography
                variant="overline"
                key={`proj-${projName}-${i}`}
                sx={{ fontSize: "0.7rem", p: "6px 3px" }}
                noWrap
              >
                {topic}
              </Typography>
            ))}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
