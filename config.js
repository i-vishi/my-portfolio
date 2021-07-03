import { Octokit } from "@octokit/rest";
const username = process.env.GITHUB_USERNAME;
const octokit = new Octokit({auth: process.env.GITHUB_ACCESS_TOKEN});

export default octokit;
export { username };
