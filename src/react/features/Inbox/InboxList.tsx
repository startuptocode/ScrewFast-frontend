import type { FC, ReactNode } from "react";
import { generateSampleChats } from "../../utils/mockDataUtils";
import InboxItem from "./components/InboxItem";
import ListLayout from "@/react/components/listLayout";



// InboxList component
const InboxList = () => {
    return (
        <ListLayout
            headerComponent={<HeaderInbox title="Inbox" />}
            listComponent={
                <div className="space-y-12">
                    {generateSampleChats(15).map((chat) => (
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