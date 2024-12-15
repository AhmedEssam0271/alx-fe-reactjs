import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  // If you need an API key, include it in the headers
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export const fetchUserData = (username) => {
  return api.get(`/users/${username}`);
};
