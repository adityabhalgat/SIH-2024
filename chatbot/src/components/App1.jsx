import React from "react";
import Navbar from "./Navbar";
import Greetings from "./Greetings";
import BookingSec from "./BookingSec";
import MyBookings from "./MyBookings";
import ActionButtons from "./ActionButtons";
import StartChatting from "./StartChatting";

export default function App1() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <Greetings></Greetings>
      <BookingSec></BookingSec>
      <MyBookings></MyBookings>
      <ActionButtons></ActionButtons>
      <StartChatting></StartChatting>
    </div>
  );
}
