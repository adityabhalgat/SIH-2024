import React from "react";
import icon from "/MyBookings/dropdown_icon.png";

export default function MyBookings() {
  return (
    <div className="w-[450px] bg-[#d3eaff]">
      <div className="flex flex-row">
        <button>
          <img src={icon} className="w-10 mx-5"></img>
        </button>
        <h1 className="text-2xl font-bold pt-1">My Bookings</h1>
      </div>
      <div className="bg-[#D3EAFF] flex flex-col justify-center items-center py-2">
        <div className="w-[90%] h-[1px] bg-gray-400"></div>
      </div>
    </div>
  );
}
