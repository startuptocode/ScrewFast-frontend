import { Button, Tooltip } from "@nextui-org/react";
import type { FC } from "react";
import {
  getFooterItems,
  getMainMenuItems,
  type ISidebarItem,
} from "../utils/menuUtils";
import { Link } from "react-router-dom";

interface MenuItemProps {
  item: ISidebarItem;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <li>
      <Tooltip content={item.label}>
        <Button
          as={Link}
          isIconOnly
          size="md"
          variant="light"
          href={item.href}
          to={item.href}
          className="text-white"
        >
          {item.Icon}
        </Button>
      </Tooltip>
    </li>
  );
};

const Sidebar: FC = () => {
  const mainMenuItems = getMainMenuItems();
  const footerMenuItems = getFooterItems();

  return (
    <nav className="flex h-screen w-16 flex-col justify-between bg-secondary py-4">
      {/* Top section for app icon */}
      <div className="flex justify-center">
        <Button isIconOnly size="lg" variant="light">
          {/* Replace with your app icon */}
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </Button>
      </div>

      {/* Center section for main menu items */}
      <ul className="flex flex-col items-center justify-center space-y-2">
        {mainMenuItems.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </ul>

      {/* Footer section for footer menu items */}
      <ul className="mb-4 flex flex-col items-center justify-center space-y-2">
        {footerMenuItems.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
