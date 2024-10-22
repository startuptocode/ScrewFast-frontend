import type { ReactNode, FC } from "react";

interface ListLayoutProps {
    headerComponent: ReactNode;
    listComponent: ReactNode;
}

const ListLayout: FC<ListLayoutProps> = ({ headerComponent, listComponent }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-shrink-0">
                {headerComponent}
            </div>
            
            <div className="mt-4 overflow-auto flex-1 scrollbar-thin p-1">
                {listComponent}
            </div>
        </div>
    )
}
export default ListLayout;