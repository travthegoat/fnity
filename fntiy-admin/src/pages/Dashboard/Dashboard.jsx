import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar page={'dashboard'} />
            <div className="w-full bg-body-bg"></div>
        </div>
    );
}

export default Dashboard;