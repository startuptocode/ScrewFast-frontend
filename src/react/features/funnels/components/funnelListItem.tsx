import React, { useState } from 'react';
import { Avatar, Tooltip, Button, Chip } from "@nextui-org/react";
import { format } from "date-fns";
import { RiChat3Line, RiUserLine } from "react-icons/ri";
import { FunnelState, PlatformIcon, StateToFriendlyName } from "../../../utils/mockDataUtils";
import type { ChatDTO, PlatformId } from "../../dtos/chatDtos";
import type { FC } from "react";

interface ChatItemProps {
    chat: ChatDTO;
    state: FunnelState;
    stateColor: string;
}

interface FunnelItemHeaderProps {
    title: string;
    createdAt: string;
    platformId: PlatformId;
    chatName: string;
    chatImageUrl: string;
}

const FunnelItemHeader: FC<FunnelItemHeaderProps> = ({ title, createdAt, platformId, chatName, chatImageUrl }) => {
    return (
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
                <Avatar
                    alt={chatName}
                    className="flex-shrink-0"
                    size="md"
                    isBordered
                    src={chatImageUrl}
                />
                <span className="text-xl font-medium text-default-500 truncate">
                    {title}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-default-500 whitespace-nowrap">
                    {format(new Date(createdAt), "MMM d, HH:mm")}
                </span>
                <PlatformIcon platformId={platformId} />
            </div>
        </div>
    );
};

interface FunnelItemContentProps {
    content: string;
}

const FunnelItemContent: FC<FunnelItemContentProps> = ({ content }) => {
    return (
        <div className="px-3 py-2">
            <p className="text-sm text-default-600 line-clamp-2">
                {content}
            </p>
        </div>
    );
};

interface FunnelItemFooterProps {
    state: FunnelState;
    stateColor: string;
}

const FunnelItemFooter: FC<FunnelItemFooterProps> = ({ state, stateColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className="flex justify-between items-center bg-default-100 p-3 rounded-b-lg">
            <Chip
                className={`text-white ${stateColor}`}
            >
                {StateToFriendlyName(state)}
            </Chip>
            <div className="flex gap-2">
                <Tooltip content="Open Chat">
                    <Button size="sm" className="bg-secondary text-white" variant="flat" isIconOnly>
                        <RiChat3Line size={16} />
                    </Button>
                </Tooltip>
                <Tooltip content="View Profile">
                    <Button size="sm" className="bg-secondary text-white" variant="flat" isIconOnly>
                        <RiUserLine size={16} />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
};

const FunnelListItem: React.FC<ChatItemProps> = ({ chat, state, stateColor }) => (
    <div className="flex flex-col border rounded-lg overflow-hidden">
        <FunnelItemHeader
            chatName={chat.metadata.chatName}
            chatImageUrl={chat.metadata.chatImageUrl}
            title={chat.metadata.chatName}
            createdAt={chat.messages[0].metadata.createdAt}
            platformId={chat.metadata.platformId}
        />
        <FunnelItemContent content={chat.messages[0].content.message} />
        <FunnelItemFooter 
            state={state}
            stateColor={stateColor}
        />
    </div>
);

export default FunnelListItem;