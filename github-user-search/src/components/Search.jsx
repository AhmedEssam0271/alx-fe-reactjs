import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const response = await fetchUserData({ username, location, minRepos });
      if (response.data.items.length === 0) {
        setError("No users found matching your criteria.");
      } else {
        setUsers(response.data.items);
      }
    } catch {
      setError("Error fetching data from GitHub. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="p-4 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="minRepos"
            className="block text-gray-700 font-bold mb-2"
          >
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <h2 className="text-xl font-bold mt-2">{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
