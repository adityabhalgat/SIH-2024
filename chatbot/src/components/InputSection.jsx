import React, { useState, useRef, useEffect } from "react";
import translate from "/InputSection/translate.png";
import mic from "/InputSection/mic.png";
import send from "/InputSection/send.png";

export default function InputSection() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [firstInteraction, setFirstInteraction] = useState(false);
  
  // Ref to scroll to the bottom
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages container whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      addUserMessage(userInput);
      if (!firstInteraction) {
        setFirstInteraction(true);
        processBotResponse(null);
      } else {
        processBotResponse(userInput.trim());
      }
      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const addUserMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
    ]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "bot", text: message },
    ]);
  };

  const processBotResponse = (input) => {
    setTimeout(() => {
      if (!firstInteraction) {
        addBotMessage("Hello! Welcome to the museum ticket booking service.");
        setTimeout(() => {
          addBotMessage("What’s your name?");
          setStep(1);
        }, 1000);
      } else if (step === 1) {
        setUserName(input);
        addBotMessage(`Nice to meet you, ${input}! Which museum would you like to visit?`);
        setStep(2);
      } else if (step === 2) {
        addBotMessage(`Great choice! What date would you like to book for the ${input}?`);
        setStep(3);
      } else if (step === 3) {
        addBotMessage(`Booking for ${input}. Here are the available prices: $20 for adults, $10 for children.`);
        addBotMessage(`Would you like to confirm the booking, ${userName}?`);
        setStep(4);
      } else if (step === 4) {
        addBotMessage(`Thank you, ${userName}. Your booking is confirmed!`);
        setStep(5);
      }
    }, 800); // Simulated delay for bot typing
  };

  // Speech recognition functionality
  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // Set language
    recognition.interimResults = false; // Only capture full results
    recognition.maxAlternatives = 1; // Single result

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setUserInput(speechResult); // Update input field with the recognized speech
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition:", event.error);
    };
  };

  return (
    <div className="w-[450px] bg-[#052f44] p-4">
      <div className={`h-[497px] bg-white overflow-y-auto mb-4 p-2`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.type === "user" ? "text-right" : "text-left"
            }`}
          >
            <p
              className={`inline-block ${
                msg.type === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-200 text-gray-800"
              } rounded-md px-4 py-2`}
              style={{ maxWidth: "75%", wordWrap: "break-word" }}
            >
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-16 pt-2">
          <button>
            <img src={translate} alt="translate" />
          </button>
        </div>
        <div className="w-72 py-5">
          <input
            className="w-full h-8 border-2 rounded-md p-2"
            placeholder="Type here..."
            value={userInput}
            onChange={handleUserInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-6 pt-4">
            <button onClick={startRecognition}>
              <img src={mic} alt="mic" />
            </button>
          </div>
          <div className="w-10 pt-5 pr-2">
            <button onClick={handleSendMessage}>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
