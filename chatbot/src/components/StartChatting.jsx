import React from "react";

export default function StartChatting({ onStartChat }) {
  return (
    <>
      <div className="w-[450px] h-[1px] bg-gray-400"></div>
      <div className="w-[450px] bg-[#d3eaff] py-4 flex justify-center">
        <button
          className="border-2 rounded-md bg-[#004d73] p-2 w-3/5 text-xl font-semibold hover:bg-[#00384e] hover:text-white"
          onClick={onStartChat} // Ensure this is a function
        >
          Start Chat
        </button>
      </div>
    </>
  );
}
