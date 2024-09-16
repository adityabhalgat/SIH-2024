import React, { useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";

export default function App() {
// In App.js
const [showApp1, setShowApp1] = useState(true);

const handleStartChat = () => {
  console.log("Button clicked, switching to App2");
  setShowApp1(false);
};

return (
  <div>
    {showApp1 ? (
      <App1 onStartChat={handleStartChat} />
    ) : (
      <App2 />
    )}
  </div>
);

}
