import React from "react";
import parking from "/ActionButtons/parking.png";
import ticket from "/ActionButtons/ticket.png";
import refund from "/ActionButtons/refund.png";
import wheelchair from "/ActionButtons/wheelchair.png";
import suppport from "/ActionButtons/support.png";
import feedback from "/ActionButtons/feedback.png";

export default function ActionButtons() {
  return (
    <div className="w-[450px] bg-[#d3eaff] ">
      <div className="text-center pb-5">
        <h1 className="text-2xl font-bold">Looking for something else?</h1>
      </div>
      <div className="pb-5 bg-[#d3eaff]">
        <div class="grid grid-cols-3 gap-4 bg-[#D3EAFF] pl-5">
          <button className="w-24 pl-2 bg-[#004d73] border-none rounded-md items-center hover:bg-[#00384e]">
            <img src={parking} className="w-20"></img>
            <p className="text-[#FFD700] font-thin">Parking</p>
          </button>

          <button className="w-24 bg-[#004d73] border-none rounded-md hover:bg-[#00384e]">
            <img src={ticket} className="w-20 mb-3"></img>
            <p className="text-[#FFD700] font-thin">Tickets</p>
          </button>

          <button className="w-24 bg-[#004d73] border-none rounded-md hover:bg-[#00384e]">
            <img src={refund} className="w-20"></img>
            <p className="text-[#FFD700] font-thin">Refund Status</p>
          </button>

          <button className="w-24 py-1 bg-[#004d73] border-none rounded-md hover:bg-[#00384e]">
            <img src={wheelchair} className="w-20"></img>
            <p className="text-[#FFD700] font-thin">Special Requirements</p>
          </button>

          <button className="w-24 bg-[#004d73] border-none rounded-md hover:bg-[#00384e]">
            <img src={suppport} className="w-20"></img>
            <p className="text-[#FFD700] font-thin">Customer Care</p>
          </button>

          <button className="w-24 bg-[#004d73] border-none rounded-md hover:bg-[#00384e]">
            <img src={feedback} className="w-16 ml-4 mb-3"></img>
            <p className="text-[#FFD700] font-thin">Feedback</p>
          </button>
        </div>
      </div>
    </div>
  );
}
