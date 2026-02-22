import React from 'react';
import PostsComponent from './components/PostsComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // since you installed @tanstack/react-query

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
