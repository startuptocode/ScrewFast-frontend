import React from "react";
import { usePosts } from "../hooks/usePosts";
import { useHubs } from "../features/hubs/hooks/useHubs";

const Chat = () => {
  return (
    <div className="h-screen w-full bg-gray-50 p-4">
      <HubsList/>
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
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const HubsList = () => {
  const { data: hubs, isLoading, error } = useHubs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Hubs</h2>
      <div className="grid gap-4">
        {hubs?.map((hub) => (
          <div key={hub.hubId} className="rounded border p-4">
            <h3>{hub.phoneNumber}</h3>
            <p>{hub.platformId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
