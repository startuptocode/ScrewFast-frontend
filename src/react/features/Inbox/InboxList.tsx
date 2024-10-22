import { type FC } from "react";
import InboxItem from "./components/InboxItem";
import ListLayout from "@/react/components/listLayout";
import { useFunnelChats } from "@/react/hooks/useSampleChats";

// InboxList component
const InboxList = () => {
    const { chats } = useFunnelChats({
        initialCount: 5,
        messagesPerChat: 3
      });
    return (
        <ListLayout
            headerComponent={<HeaderInbox title="Inbox" />}
            listComponent={
                <div className="space-y-6">
                    {chats.map((chat) => (
                        <InboxItem key={chat.id} chat={chat} />
                    ))}
                </div>
            }
        />
    )
}
export default InboxList;

interface HeaderInboxProps {
    title: string;
}

const HeaderInbox: FC<HeaderInboxProps> = ({ title }) => {

    return (
        <div className="flex gap-x-1">
            <h1 className="text-4xl font-thin text-default-900">{title}</h1>
            <h1 className="font-bold text-lg  text-primary-400">45</h1>
        </div>
    )
}