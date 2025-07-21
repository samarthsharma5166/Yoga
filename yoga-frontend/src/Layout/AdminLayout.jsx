import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbarr from "../components/Navbar";
import Sidebar from "../Admin/Dashboardsidebar";
import {
  Dashboard as DashboardIcon,
  AccountCircle as SessionIcon,
  Assessment as ReportIcon,
  BarChart as ProgressIcon,
  School as TestIcon,
} from "@mui/icons-material";
import "./CSS/adminlayout.css";
// import Drawer from "../components/Drawer";
import {  Users2Icon } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "admin-dashboard" },
  { name: "Manage Users", icon: <SessionIcon />, path: "manage-user" },
  { name: "Blog", icon: <ReportIcon />, path: "create-blog" },
  { name: "Manage Class", icon: <ReportIcon />, path: "manage-classes" },
  { name: "Manage Payment", icon: <ProgressIcon />, path: "price" },
  { name: "Manage Refferal", icon: <TestIcon />, path: "refferal" },
  { name: "Users", icon: <Users2Icon />, path: "users" },
];
const Adminlayout = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/register");
    }
  });

  return (
    <div className="admin-container mt-20">
      <Navbarr open={open} setOpen={setOpen} text="" />

      <div className="admin-body">
        <Sidebar menuItems={menuItems} open={open} setOpen={setOpen} />
        {/* New Drawer */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Adminlayout;
