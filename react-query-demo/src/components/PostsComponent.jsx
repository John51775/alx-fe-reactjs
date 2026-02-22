import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Must be named fetchPosts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['posts'],
    fetchPosts,
    {
      cacheTime: 300000,              // 5 minutes
      staleTime: 10000,               // 10 seconds
      refetchOnWindowFocus: true,     // auto refetch when tab refocuses
      keepPreviousData: true          // keeps previous data while fetching new
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <button
        onClick={refetch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} className="mb-4 border-b pb-2">
            <strong className="block text-lg">{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}