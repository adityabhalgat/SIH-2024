import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const list = [
  "🎫 Book Ticket",
  "🔄 Refund Status",
  "🎟️ Cancel Ticket",
  "📜 Booking History",
];

export default function ScrollButtons() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[0] w-full h-[48px] px-10 py-2 overflow-hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 border border-gray-400 rounded-full duration-500 hover:scale-125 hover:ml-1 hover:bg-[#d3eaff]"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 border border-gray-400 rounded-full duration-500 hover:scale-125 hover:mr-1 hover:bg-[#d3eaff]"
      >
        <FaArrowRight />
      </button>
      <ul
        ref={containerRef}
        className="flex flex-row gap-2 whitespace-nowrap overflow-hidden"
      >
        {list.map((item, index) => (
          <button
            key={index}
            className="px-2 py-1 border-gray-400 border-2 rounded-lg flex-shrink-0 bg-[#004d73] hover:bg-[#d3eaff] hover:font-bold"
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
}
