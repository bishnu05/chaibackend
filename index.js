require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "bishnu05",
  id: 101577876,
  node_id: "U_kgDOBg30lA",
  avatar_url: "https://avatars.githubusercontent.com/u/101577876?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/bishnu05",
  html_url: "https://github.com/bishnu05",
  followers_url: "https://api.github.com/users/bishnu05/followers",
  following_url: "https://api.github.com/users/bishnu05/following{/other_user}",
  gists_url: "https://api.github.com/users/bishnu05/gists{/gist_id}",
  starred_url: "https://api.github.com/users/bishnu05/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/bishnu05/subscriptions",
  organizations_url: "https://api.github.com/users/bishnu05/orgs",
  repos_url: "https://api.github.com/users/bishnu05/repos",
  events_url: "https://api.github.com/users/bishnu05/events{/privacy}",
  received_events_url: "https://api.github.com/users/bishnu05/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Bishnu Gorai",
  company: "INNsight.com",
  blog: "https://bishnu-portfolio.netlify.app/",
  location: "Ahmedabad, Gujarat",
  email: null,
  hireable: null,
  bio: "Front-End Developer | React JS | Redux | JavaScript | HTML | CSS | Chakra-UI | MUI | Bootstrap | Tailwind CSS | TypeScript | sass | Python",
  twitter_username: null,
  public_repos: 72,
  public_gists: 0,
  followers: 55,
  following: 74,
  created_at: "2022-03-14T14:53:16Z",
  updated_at: "2025-04-26T19:05:33Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});
app.get("/bishnu", (req, res) => {
  res.send("bishnu05");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
