import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export const fetchUserData = ({ username, location, minRepos }) => {
  let apiUrl = `/search/users?q=${username}`;
  if (location) apiUrl += `+location:${location}`;
  if (minRepos) apiUrl += `+repos:>=${minRepos}`;
  return api.get(apiUrl);
};
