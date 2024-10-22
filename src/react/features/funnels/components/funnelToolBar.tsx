import { Button } from "@nextui-org/react";

const FunnelToolBar = () => {
    return (
        <div className="flex  mt-4">
            <Button size="sm" variant="light">
                <h1 className="font-semibold text-secondary">REFRESH</h1>
            </Button>
            <Button className="font-semibold text-secondary" size="sm" variant="light">
                <h1>NAVIGATE</h1>
            </Button>
        </div>
    )
}
export default FunnelToolBar;