import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "../components/Navbarr";
import Sidebar from "../Admin/Dashboardsidebar";
import {
  Dashboard as DashboardIcon,
  AccountCircle as SessionIcon,
  Assessment as ReportIcon,
  BarChart as ProgressIcon,
  School as TestIcon,
} from "@mui/icons-material";
import './CSS/adminlayout.css'

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "admin-dashboard" },
  { name: "Manage Users", icon: <SessionIcon />, path: "manage-user" },
  { name: "Blog", icon: <ReportIcon />, path: "create-blog" },
  { name: "Manage Class", icon: <ReportIcon />, path: "manage-classes" },
  { name: "Manage Payment", icon: <ProgressIcon />, path: "price" },
  { name: "Manage Refferal", icon: <TestIcon />, path: "refferal" },
];
const Adminlayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-container">
      <Navbarr open={open} setOpen={setOpen} text="" />

      <div className="admin-body">
        <Sidebar menuItems={menuItems} open={open} setOpen={setOpen} />
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
export default Adminlayout;
