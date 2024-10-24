import React from 'react';
import { Avatar, Tooltip, Button } from "@nextui-org/react";
import { format } from "date-fns";
import { RiChat3Line, RiUserLine, RiFlowChart } from "react-icons/ri";
import { PlatformIcon } from '../../../utils/mockDataUtils';
import type { ChatDTO } from '../../dtos/chatDtos';


interface ChatItemProps {
  chat: ChatDTO;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => (
  <div className="flex items-start p-2 gap-2  mb-6 mr-4 border-b">
    <Avatar
      alt={chat.metadata.chatName}
      className="flex-shrink-0"
      size="md"
      src={chat.metadata.chatImageUrl}
    />
    <div className="flex flex-col flex-grow min-w-0 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <span className="text-md font-medium text-default-500 truncate">
          {chat.metadata.chatName}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-default-500 whitespace-nowrap">
            {format(
              new Date(chat.messages[0].metadata.createdAt),
              "MMM d, HH:mm"
            )}
          </span>
          <PlatformIcon platformId={chat.metadata.platformId} />
        </div>
      </div>
      <p className="text-xs text-default-600 line-clamp-2 mb-2">
        {chat.messages[0].content.message}
      </p>
      <div className="flex justify-end">
        <div className="flex justify-end gap-2 mt-2">
          <Tooltip content="Open Chat">
            <Button size="sm" color="primary" variant="flat" isIconOnly>
              <RiChat3Line size={16} />
            </Button>
          </Tooltip>
          <Tooltip content="View Profile">
            <Button size="sm" color="success" variant="flat" isIconOnly>
              <RiUserLine size={16} />
            </Button>
          </Tooltip>
          <Tooltip content="Send to Funnel">
            <Button
              size="sm"
              isIconOnly
              className="bg-pink-500 text-white"
              variant="flat"
            >
              <RiFlowChart size={16} />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
);

export default ChatItem;