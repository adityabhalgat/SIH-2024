// In App1.js
import React from "react";
import Navbar from "./Navbar";
import Greetings from "./Greetings";
import BookingSec from "./BookingSec";
import MyBookings from "./MyBookings";
import ActionButtons from "./ActionButtons";
import StartChatting from "./StartChatting";

export default function App1({ onStartChat, onHomeClick }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar onHomeClick={onHomeClick} />
      <Greetings />
      <BookingSec />
      <MyBookings />
      <ActionButtons />
      <StartChatting onStartChat={onStartChat} />
    </div>
  );
}
