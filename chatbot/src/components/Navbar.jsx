import React from "react";
import menuIcon from "/Navbar/menu.png";
import homeIcon from "/Navbar/home.png";
import logo from "/Navbar/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#004d73] p-4 flex justify-between items-center w-[450px]">
      {/* Left Section: Menu and Home Icons */}
      <div className="flex flex-col items-center space-y-2">
        {/* Menu Icon */}
        <div>
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="w-7 h-7 hover:cursor-pointer"
          />
        </div>

        {/* Home Icon */}
        <div>
          <img
            src={homeIcon}
            alt="Home Icon"
            className="w-10 h-10 hover:cursor-pointer"
          />
        </div>
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
    </nav>
  );
};

export default Navbar;
