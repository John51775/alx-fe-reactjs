import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function must be named fetchPosts exactly
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  // useQuery with correct variable names
  const { data, isLoading, isError, error, refetch } = useQuery(['posts'], fetchPosts);

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