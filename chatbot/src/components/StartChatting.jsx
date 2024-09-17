import React from "react";

export default function StartChatting({ onStartChat }) {
  return (
    <div className="sticky bottom-0 w-[450px] bg-[#d3eaff] pb-2 shadow-2xl flex flex-col items-center gap-3 justify-center z-50">
      <div className="w-[450px] h-[2px] bg-gray-500"></div>
      <button
        className="border-2 rounded-md bg-[#004d73] p-2 w-3/5 text-xl font-semibold hover:bg-[#00384e] hover:text-white"
        onClick={onStartChat}
      >
        Start Chat
      </button>
    </div>
  );
}
