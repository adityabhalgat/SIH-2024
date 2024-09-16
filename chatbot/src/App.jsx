import React, { useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";

export default function App() {
  const [showApp1, setShowApp1] = useState(true);

  const handleStartChat = () => {
    console.log("Button clicked, switching to App2");
    setShowApp1(false);
  };

  const handleHomeClick = () => {
    console.log("Home clicked, switching to App1");
    setShowApp1(true);
  };

  return (
    <div>
      {showApp1 ? (
        <App1 onStartChat={handleStartChat} onHomeClick={handleHomeClick} />
      ) : (
        <App2 onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}
