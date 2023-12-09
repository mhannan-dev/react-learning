import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"> React Admin </span>{" "}
            </div>{" "}
            <hr />
            <div className="center">
                <ul>
                    <p className="title"> Main </p>{" "}
                    <li>
                        <DashboardIcon className="icon" />
                        <span> Dashboard </span>
                    </li>
                    <p className="title"> Lists </p>{" "}
                    <li>
                        <PeopleIcon className="icon" />
                        <span> Users </span>
                    </li>

                    <li>
                        <PeopleIcon className="icon" />
                        <span> Orders </span>
                    </li>

                    <li>
                        <PeopleIcon className="icon" />
                        <span> Products </span>
                    </li>

                    <li>
                        <PeopleIcon className="icon" />
                        <span> Delivery </span>
                    </li>
                    <p className="title"> Useful </p>{" "}
                    <li>
                        <InventoryIcon className="icon" />
                        <span> Sales </span>
                    </li>

                    <li>
                        <InventoryIcon className="icon" />
                        <span> Notifications </span>
                    </li>
                    <p className="title"> Service </p>{" "}
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span> System Health </span>
                    </li>
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span> Logs </span>
                    </li>

                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span> Settings </span>
                    </li>

                    <p className="title"> User </p>{" "}
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span> Profile </span>
                    </li>
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span> Logout </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;
