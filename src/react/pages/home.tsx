import { useState } from "react";
import Drawer from "../components/Drawer";
import FunnelList from "../features/funnels/funnelList";
import InboxList from "../features/Inbox/InboxList";
import { Button } from "@nextui-org/react";
import UserProfile from "../features/profile/userProfile";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:flex md:gap-x-0 p-4 h-full">
            {/* Columna del inbox con scroll delgado */}
            <div id="inbox-panel" className="md:w-96 flex-shrink-0 ">
                <InboxList />
            </div>
            <div className="md:flex md:gap-x-0 flex-grow h-full" id="funnels">
                {/* Columnas con scroll delgado */}
                <div className="flex-1 overflow-auto h-full scrollbar-thin">
                    <FunnelList title="Support" count={12} />
                </div>
                <div className="flex-1 overflow-auto h-full scrollbar-thin">
                    <FunnelList title="Sales" count={34} />
                </div>
                <div className="flex-1 overflow-auto h-full scrollbar-thin">
                    <FunnelList title="Invoices" count={40} />
                </div>
            </div>
            <Button onClick={()=>{setIsOpen(true)}}> Open</Button>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <UserProfile/>
            </Drawer>
        </div>
    )
}
export default Home;