import React from "react";
import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings";
import BookingSec from "./components/BookingSec";
import MyBookings from "./components/MyBookings";
import ActionButtons from "./components/ActionButtons";
import InputSection from "./components/InputSection";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <Greetings></Greetings>
      <BookingSec></BookingSec>
      <MyBookings></MyBookings>
      <ActionButtons></ActionButtons>
      <InputSection></InputSection>
    </div>
  );
}
