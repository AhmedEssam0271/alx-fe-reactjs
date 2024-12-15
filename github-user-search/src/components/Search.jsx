import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setUser(null);

  try {
    const response = await fetchUserData(username);
    setUser(response.data);
  } catch {
    setError("Looks like we cant find the user");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full"
          />
          <h2 className="text-xl font-bold mt-2">{user.login}</h2>
          <a href={user.html_url} className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
