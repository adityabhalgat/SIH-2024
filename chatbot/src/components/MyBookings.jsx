import React, { useState } from "react";
import icon from "/MyBookings/dropdown_icon.png";

export default function MyBookings() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-[450px] bg-[#d3eaff]">
      {/* My Bookings Header */}
      <div className="flex flex-row items-center">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <img
            src={icon}
            alt="Dropdown Icon"
            className={`hover:scale-125 w-10 mx-5 transform transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <h1 className="text-2xl font-bold pt-1">My Bookings</h1>
      </div>

      {/* Dropdown Menu*/}
      {dropdownOpen && (
        <div className="bg-[#d3eaff] w-full py-2 shadow-lg rounded-md flex flex-col gap-2 items-center justify-center">
          <p className="text-center text-gray-600">
            Please login to see your upcoming bookings.
          </p>
          <button className="block w-48 text-center text-white py-2 rounded-md bg-[#004d73] hover:bg-[#00384e]">
            Login
          </button>
        </div>
      )}

      <div className="bg-[#D3EAFF] flex flex-col justify-center items-center py-2">
        <div className="w-[90%] h-[1px] bg-gray-400"></div>
      </div>
    </div>
  );
}
