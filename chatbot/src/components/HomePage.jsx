import React, { useState } from "react";
import App1 from "./App1";
import App2 from "./App2";
import StartButton from "./StartButton"; // Import the StartButton component

export default function HomePage() {
  const [showApp1, setShowApp1] = useState(false); // Start with showing StartButton (video)
  const [showApp2, setShowApp2] = useState(false);

  // Show App1 after clicking the start button on the video
  const handleOpenApp1 = () => {
    setShowApp1(true);
    setShowApp2(false); // Ensure App2 is not shown
  };

  // Show App2 after clicking "Start Chatting" in App1
  const handleStartChat = () => {
    setShowApp1(false);
    setShowApp2(true);
  };

  // Go back to App1 from App2 (if needed)
  const handleHomeClick = () => {
    setShowApp1(true);
    setShowApp2(false);
  };

  return (
    <div>
      {/* Show StartButton (video) initially */}
      {!showApp1 && !showApp2 && <StartButton openBot={handleOpenApp1} />}

      {/* Show App1 */}
      {showApp1 && (
        <App1 onStartChat={handleStartChat} onHomeClick={handleHomeClick} />
      )}

      {/* Show App2 */}
      {showApp2 && <App2 onHomeClick={handleHomeClick} />}
    </div>
  );
}
