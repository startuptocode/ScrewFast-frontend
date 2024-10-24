import React from 'react';
import { usePosts } from '../hooks/usePosts';

const Chat = () => {
  return (
    <div className="h-screen w-full bg-gray-50 p-4">
      <PostsList/>
    </div>
  );
};

export default Chat;




const PostsList = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Cargando posts...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!posts) return null;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};