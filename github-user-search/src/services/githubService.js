import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export const fetchUserData = ({ username, location, minRepos }) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;
  const apiUrl = `/search/users?q=${query}`;
  return api.get(apiUrl);
};
// "https://api.github.com/search/users?q"
