// In App2.js
import React from "react";
import Navbar from "./Navbar";
import InputSection from "./InputSection";

export default function App2({ onHomeClick }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400">
      <Navbar onHomeClick={onHomeClick} />
      <InputSection />
    </div>
  );
}
