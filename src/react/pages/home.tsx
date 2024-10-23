import { useState } from "react";
import Drawer from "../components/Drawer";
import FunnelList from "../features/funnels/funnelList";
import InboxList from "../features/Inbox/InboxList";
import { Button } from "@nextui-org/react";
import UserProfile from "../features/profile/userProfile";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = async () => {
    try {
      navigate("/app/chat", {
        state: { from: "homepage" },
        // replace: true // Usar replace si no quieres que se añada al historial
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="h-full p-4 md:flex md:gap-x-0">
      {/* Columna del inbox con scroll delgado */}
      <div id="inbox-panel" className="flex-shrink-0 md:w-96">
        <InboxList />
      </div>
      <div className="h-full flex-grow md:flex md:gap-x-0" id="funnels">
        {/* Columnas con scroll delgado */}
        <div className="h-full flex-1 overflow-auto scrollbar-thin">
          <FunnelList title="Support" count={12} />
        </div>
        <div className="h-full flex-1 overflow-auto scrollbar-thin">
          <FunnelList title="Sales" count={34} />
        </div>
        <div className="h-full flex-1 overflow-auto scrollbar-thin">
          <FunnelList title="Invoices" count={40} />
        </div>
      </div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </Button>
      <button
        onClick={() => handleNavigation()}
        className="bg-blue-500 rounded-md px-4 py-2"
      >
        Ir al Chat 123
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserProfile />
      </Drawer>
    </div>
  );
};
export default Home;
