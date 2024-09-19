import React from "react";
import Navbar from "./Navbar";
import InputSection from "./InputSection";
import WebVideo from "/HomePage/WebVideo.mp4"; // Import the video

export default function App2({ onHomeClick }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={WebVideo}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0 filter blur-md"
      />

      {/* Scrollable content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between items-center">
        {/* Navbar */}
        <div className="sticky top-0">
          <Navbar onHomeClick={onHomeClick} />
        </div>

        {/* Scrollable middle content */}
        <div className="flex-1 overflow-hidden custom-scrollbar w-[450px]">
          <InputSection />
        </div>
      </div>
    </div>
  );
}
