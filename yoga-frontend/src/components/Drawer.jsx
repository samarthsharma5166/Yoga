import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Drawer = ({ menuItems }) => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
  const onClick = (path) => {
    console.log(path)
    navigate(path);
    // if (handleClick) {
    //   handleClick();
    // }
  };
    
  return (
    <div style={{ zIndex: 1000 }} className="drawer relative my-5">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn text-2xl drawer-button" >
          {/* Open drawer */}
          <IoIosMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            {menuItems.map((item) => (
              <span className={`text-base py-4 border-b rounded-none border-zinc-500`} onClick={() => onClick(item.path)} key={item.name}>
                {item.icon}
                {item.name}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer