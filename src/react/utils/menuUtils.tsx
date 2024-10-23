import type { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GoHubot } from "react-icons/go";
import { IoMdContrast } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { TbSitemap } from "react-icons/tb";
import Home from "../pages/home";
import Hubs from "../pages/hubs";
import Funnels from "../pages/funnels";
import Bulk from "../pages/bulk";
import Chat from "../pages/chat";

const iconSize = 28;

export interface IBaseRoute {
    key: string;
    label: string;
    href: string;
    element?: ReactNode;
}

export interface ISidebarItem extends IBaseRoute {
    Icon: ReactNode;
    isFooter: boolean;
}


export type RouteItem = IBaseRoute | ISidebarItem;


export const isSidebarItem = (item: RouteItem): item is ISidebarItem => {
    return 'Icon' in item;
};


export const routes: RouteItem[] = [
    // Items del Sidebar (menuItems)
    {
        key: 'home',
        label: 'Home',
        Icon: <AiOutlineHome size={iconSize} />,
        href: '/app',
        isFooter: false,
        element: <Home />
    },
    {
        key: 'hubs',
        label: 'Hubs',
        Icon: <GoHubot size={iconSize} />,
        href: '/app/hubs',
        isFooter: false,
        element: <Hubs />
    },
    {
        key: 'funnels',
        label: 'Funnels',
        Icon: <TbSitemap size={iconSize} />,
        href: '/app/funnels',
        isFooter: false,
        element: <Funnels />
    },
    {
        key: 'bulk-messages',
        label: 'Bulk Messages',
        Icon: <BiMessageRoundedDots size={iconSize} />,
        href: '/app/bulk-messages',
        isFooter: false,
        element: <Bulk />
    },
    {
        key: 'change-theme',
        label: 'Change Theme',
        Icon: <IoMdContrast size={iconSize}/>,
        href: '#',
        isFooter: true,
        element: null
    },
    {
        key: 'change-language',
        label: 'Change Language',
        Icon: <MdOutlineLanguage size={iconSize}/>,
        href: '#',
        isFooter: true,
        element: null
    },
    // (routeItems)
    {
        key: 'chat',
        label: 'Chat Panel',
        href: '/app/chat',
        element: <Chat />
    }
];

export const getSidebarItems = (): ISidebarItem[] => 
    routes.filter(isSidebarItem);

export const getMainMenuItems = (): ISidebarItem[] => 
    getSidebarItems().filter(item => !item.isFooter);

export const getFooterItems = (): ISidebarItem[] => 
    getSidebarItems().filter(item => item.isFooter);

export const getNonSidebarRoutes = (): IBaseRoute[] => 
    routes.filter(item => !isSidebarItem(item));
