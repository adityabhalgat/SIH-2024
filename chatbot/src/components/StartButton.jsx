import React from "react";
import Bot from "/HomePage/bot.png";
import WebVideo from "/HomePage/WebVideo.mp4";

export default function StartButton({ openBot }) {
  return (
    <div className="w-screen h-screen relative">
      <video
        src={WebVideo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 p-4 rounded-full duration-500  hover:scale-150"
        onClick={openBot} // Trigger the openBot function passed from HomePage
      >
        <img src={Bot} alt="Bot" />
      </button>
    </div>
  );
}
