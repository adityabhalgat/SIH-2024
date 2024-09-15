import React, { useRef } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Icons

const BookingSec = () => {
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  // Function to focus date input when clicking the calendar icon
  const handleDateIconClick = () => {
    dateInputRef.current.focus();
  };

  // Function to focus time input when clicking the clock icon
  const handleTimeIconClick = () => {
    timeInputRef.current.focus();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center top-0 p-5 bg-[#D3EAFF] w-[450px]">
        {/* Booking Form */}
        <div className="bg-[#052F44] p-8 rounded-3xl shadow-lg border border-gray-300 max-w-md w-full">
          <form className="space-y-6">
            {/* Date Input */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleDateIconClick}
                className="focus:outline-none"
              >
                <FaCalendarAlt className="text-3xl text-blue-500" />
              </button>
              <div className="w-full">
                <label className="block text-sm text-gray-500">Date</label>
                <input
                  type="date"
                  ref={dateInputRef} // Referencing the date input
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Time Input */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleTimeIconClick}
                className="focus:outline-none"
              >
                <FaClock className="text-3xl text-blue-500" />
              </button>
              <div className="w-full">
                <label className="block text-sm text-gray-500">Time</label>
                <input
                  type="time"
                  ref={timeInputRef} // Referencing the time input
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Book Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-gray-300 hover:bg-gray-400 text-lg font-semibold text-black rounded-lg transition duration-300"
              >
                Book Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingSec;
