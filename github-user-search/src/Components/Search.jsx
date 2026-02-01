import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const perPage = 10; // results per page

  const fetchUsers = async (reset = false) => {
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    if (reset) setUsers([]);
    try {
      const { users: fetchedUsers, totalCount } = await searchUsers({
        username,
        location,
        minRepos,
        page: reset ? 1 : page,
        perPage,
      });

      if (fetchedUsers.length === 0) {
        setError("Looks like we can't find any users");
      } else {
        setUsers((prev) => (reset ? fetchedUsers : [...prev, ...fetchedUsers]));
        setTotalCount(totalCount);
      }
    } catch (err) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchUsers(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    fetchUsers();
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6 flex flex-col gap-4">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center gap-2 p-4 border rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full"
            />
            <h2 className="text-xl font-semibold">{user.login}</h2>
            <p>Repositories: {user.public_repos ?? "N/A"}</p>
            <p>Location: {user.location ?? "N/A"}</p>
            <p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </p>
          </div>
        ))}

        {/* Load More Button */}
        {users.length > 0 && users.length < totalCount && !loading && (
          <button
            onClick={handleLoadMore}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;