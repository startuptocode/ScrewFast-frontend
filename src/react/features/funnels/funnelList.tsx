import { useEffect, useState, type FC } from "react";
import { FunnelState, generateSampleChats } from "../../utils/mockDataUtils";
import FunnelListItem from "./components/funnelListItem";
import ListLayout from "@/react/components/listLayout";
import type { ChatDTO } from "../dtos/chatDtos";
import { useFunnelChats } from "@/react/hooks/useSampleChats";
import FunnelToolBar from "./components/funnelToolBar";

const getRandomState = (): FunnelState => {
    const states = [FunnelState.New, FunnelState.InProgress, FunnelState.Completed];
    return states[Math.floor(Math.random() * states.length)];
};

const getRandomColor = (): string => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length - 1)];
};

interface FunnelListProps {
    title: string,
    count: number
}


const FunnelList: FC<FunnelListProps> = ({ title, count }) => {
    const { chats, loading, error, refreshChats } = useFunnelChats({
        initialCount: 5,
        messagesPerChat: 3
    });

    return (
        <ListLayout
            headerComponent={<HeaderInbox title={title} count={count} />}
            listComponent={
                <div className="space-y-2">
                    {chats.map((chat) => (
                        <FunnelListItem
                            key={chat.id}
                            chat={chat}
                            state={getRandomState()}
                            stateColor={getRandomColor()}
                        />
                    ))}
                </div>
            }
        />
    )
}
export default FunnelList;

interface HeaderInboxProps {
    title: string;
    count: number;
}

const HeaderInbox: FC<HeaderInboxProps> = ({ title, count }) => {

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-x-1">
                <h1 className="text-4xl font-thin text-default-900">{title}</h1>
                <h1 className="font-bold text-lg  text-primary-400">{count}</h1>
            </div>
            <div><FunnelToolBar /></div>
        </div>

    )
}