import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "../components/Navbar";
import Sidebar from "../Admin/Dashboardsidebar";

import {
  Dashboard as DashboardIcon,
  Assignment as PlanIcon,
  BookOnline as BookingIcon,
  Payment as PaymentIcon,
  Group as ReferralIcon,
} from "@mui/icons-material";

import "./CSS/userlayout.css"; // ✅ Use this for styling

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "dashboard" },
  { name: "Plans", icon: <PlanIcon />, path: "demobook" },
  { name: "Bookings", icon: <BookingIcon />, path: "classbook" },
  { name: "Payment", icon: <PaymentIcon />, path: "price" },
  { name: "Referrals", icon: <ReferralIcon />, path: "refferal" },
];

const Userlayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="user-container mt-20">
      <Navbarr open={open} setOpen={setOpen} text="User Panel" />

      <div className="user-body">
        <Sidebar menuItems={menuItems} open={open} setOpen={setOpen} />

        <div className="user-main-content">
          <h1 className="text-2xl ">Comming Soon....</h1>
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default Userlayout;
