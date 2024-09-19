import React, { useState } from "react";
import menuIcon from "/Navbar/menu.png";
import homeIcon from "/Navbar/home.png";
import logo from "/Navbar/logo.png";

const Navbar = ({ onHomeClick }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-[#004d73] px-4 py-2 flex justify-between items-center w-[451px] sticky top-0 z-20 ">
      {/* Left Section: Menu and Home Icons */}
      <div className="flex flex-col items-center space-y-2">
        {/* Menu Icon */}
        <button className="duration-500 hover:scale-125" onClick={toggleNav}>
          <img src={menuIcon} alt="Menu Icon" className="w-7 h-7" />
        </button>

        {/* Home Icon */}
        <button className="duration-500 hover:scale-125" onClick={onHomeClick}>
          <img src={homeIcon} alt="Home Icon" className="w-10 h-10" />
        </button>
      </div>

      {/* Center Section: Title */}
      <div className="text-center">
        <h1 className="text-[#FFD700] text-4xl font-serif">CYNTHIA</h1>
        <p className="text-[#FFD700] text-2xl font-serif">BOT</p>
      </div>

      {/* Right Section: Cynthia Logo */}
      <div className="w-28">
        <img src={logo} />
      </div>

      {/* Menu Dropdown */}
      {navOpen && (
        <div className="absolute top-[60px] left-0 bg-white w-[200px] p-4 shadow-lg rounded-md z-50">
          <button className="block w-full text-center bg-[#004d73] text-white py-2 rounded-md hover:bg-[#00384e]">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
