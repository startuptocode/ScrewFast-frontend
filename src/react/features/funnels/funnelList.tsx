import type { FC } from "react";
import { FunnelState, generateSampleChats } from "../../utils/mockDataUtils";
import FunnelListItem from "./components/funnelListItem";

const getRandomState = (): FunnelState => {
    const states = [FunnelState.New, FunnelState.InProgress, FunnelState.Completed];
    return states[Math.floor(Math.random() * states.length)];
};

const getRandomColor = (): string => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length-1)];
};

interface FunnelListProps {
    title: string,
    count: number
}

const FunnelList: FC<FunnelListProps> = ({ title, count }) => {
    return (
        <div className=" space-y-4">
            <HeaderInbox title={title} count={count} />
            <div className="space-y-12">
                {generateSampleChats(15).map((chat) => (
                    <FunnelListItem
                        key={chat.id}
                        chat={chat}
                        state={getRandomState()}
                        stateColor={getRandomColor()}
                    />
                ))}
            </div>
        </div>

    )
}

export default FunnelList;

interface HeaderInboxProps {
    title: string;
    count: number;
}

const HeaderInbox: FC<HeaderInboxProps> = ({ title, count }) => {

    return (
        <div className="flex gap-x-1">
            <h1 className="text-4xl font-thin text-default-900">{title}</h1>
            <h1 className="font-bold text-lg  text-primary-400">45</h1>
        </div>
    )
}