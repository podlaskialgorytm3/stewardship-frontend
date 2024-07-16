import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
    return (
        <div className="bg-red-50">
            <h1>Stewardship All Pages!</h1>
            <Outlet />
        </div>
    );
}

export default Root;  