import React, { useEffect, useState } from 'react';
import logo from '../assets/yogalogonew.png';
import '../pages/CSS/navbarr.css';
            import MenuIcon from "@mui/icons-material/Menu";


const Navbar = ({ open,setOpen }) => {
  const [name, setName] = useState('');
  const [firstLetter, setFirstLetter] = useState('');

  useEffect(() => {
    // 🧠 Assuming localStorage has a "user" object like: { name: "Amit", email: "..." }
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.name) {
      setName(userData.name);
      setFirstLetter(userData.name.charAt(0).toUpperCase());
    }
  }, []);

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-right">
          {/* 👇 Show Hello, Name */}
          {name && <span className="user-name">Hello, {name}</span>}
          {/* 👇 Show First Letter in Circle */}
          <div className="profile-circle">{firstLetter}</div>
          {/* <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button> */}
          <button className='md:hidden' onClick={() => setOpen(true)}>
            <MenuIcon/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
