import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { useServerSocialNetworkEndPointsHubsGetHubsEndPoint } from '../api-hooks/kasumiApiComponents';

const Chat = () => {
  return (
    <div className="h-screen w-full bg-gray-50 p-4">
      <PostsList />
    </div>
  );
};

export default Chat;




const PostsList = () => {
  const { data, error } = useServerSocialNetworkEndPointsHubsGetHubsEndPoint(
    { queryParams: { tenantId: "" } }
  )

  return (<div>hubs</div>)
}