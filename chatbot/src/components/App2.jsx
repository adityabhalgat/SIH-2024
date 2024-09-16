// In App2.js
import React from "react";
import Navbar from "./Navbar";
import InputSection from "./InputSection";

export default function App2({ onHomeClick }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar onHomeClick={onHomeClick} />
      <InputSection />
    </div>
  );
}
