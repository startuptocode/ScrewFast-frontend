import FunnelList from "../features/funnels/funnelList";
import InboxList from "../features/Inbox/InboxList";


const Home = () => {
    return (
        <div className="md:flex md:gap-x-8 p-4">
            <div id="inbox-panel" className="md:w-96">
                <InboxList />
            </div>
            <div className="md:flex md:gap-x-8" id="funnels">
                <div>
                    <FunnelList title="Support" count={12} />
                </div>
                <div>
                    <FunnelList title="Sales" count={34} />
                </div>
                <div>
                    <FunnelList title="Invoices" count={40} />
                </div>
            </div>
        </div>

    )
}
export default Home;