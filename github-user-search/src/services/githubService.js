import axios from "axios";

// Axios instance
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: import.meta.env.VITE_APP_GITHUB_API_KEY
    ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
    : {},
});

// Basic fetch by username (single user)
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// Advanced search with filters and pagination
export const searchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await githubApi.get("/search/users", {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    });

    // Return both the users array and total count
    return {
      users: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    console.error("Error in advanced search:", error);
    throw error;
  }
};

export default githubApi;