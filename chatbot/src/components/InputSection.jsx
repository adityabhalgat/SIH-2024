import React, { useState, useRef, useEffect } from "react";
import ScrollButtons from "./ScrollButtons";
import mic from "/InputSection/mic.png";
import send from "/InputSection/send.png";
import qrCodeImage from "/InputSection/qrCode.png";
import paymentSuccessGif from "/InputSection/paymentSuccess.gif";
import LangDropdown from "./LangDropdown"; // Import the new LanguageDropdown component

export default function InputSection() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [firstInteraction, setFirstInteraction] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeTimer, setQRCodeTimer] = useState(null);
  const [countdown, setCountdown] = useState(10);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (showQRCode) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(countdownInterval);
            setShowQRCode(false);
            setShowPaymentSuccess(true);
            addBotMessage(`Thank you, ${userName}. Your booking is confirmed!`);
            setStep(5);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showQRCode]);

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
        addBotMessage(
          `Nice to meet you, ${input}! Which museum would you like to visit?`
        );
        setStep(2);
      } else if (step === 2) {
        addBotMessage(
          `Great choice! What date would you like to book for the ${input}?`
        );
        setStep(3);
      } else if (step === 3) {
        addBotMessage(
          `Booking for ${input}. Here are the available prices: ₹100 for adults, ₹50 for children.`
        );
        addBotMessage(`Would you like to confirm the booking, ${userName}?`);
        setStep(4);
      } else if (step === 4) {
        setShowQRCode(true);
        setStep(5);
      }
    }, 800);
  };

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setUserInput(speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition:", event.error);
    };
  };

  return (
    <>
      <div className="bg-[#052f44] px-2 w-[450px]">
        <ScrollButtons />
      </div>
      <div className="w-[450px] bg-[#052f44] p-4">
        <div className="h-[496px] bg-white overflow-y-auto px-2">
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
                style={{
                  maxWidth: "75%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </p>
            </div>
          ))}
          {showQRCode && (
            <div className="flex flex-col items-center mt-4">
              <img src={qrCodeImage} alt="QR Code" className="w-40 h-40" />
              <p className="mt-2 text-gray-600">
                Please scan the QR code to complete your payment.
              </p>
              <p className="mt-2 text-gray-600">Time remaining: {countdown}s</p>
            </div>
          )}
          {showPaymentSuccess && (
            <div className="flex flex-col items-center mt-4">
              <img
                src={paymentSuccessGif}
                alt="Payment Successful"
                className="h-60"
              />
              <p className="mt-2 text-gray-600">Your payment was successful!</p>
              <p className="mt-2 text-gray-600 font-bold">
                The Ticket has been sent to your Email address.
              </p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-20 pt-2">
            <LangDropdown /> {/* Added LanguageDropdown component */}
          </div>
          <div className="w-full py-5">
            <input
              className="w-full h-10 border-2 rounded-md p-2"
              placeholder="Type here..."
              value={userInput}
              onChange={handleUserInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-8 pt-6">
              <button onClick={startRecognition}>
                <img src={mic} alt="mic" />
              </button>
            </div>
            <div className="w-8 pt-6">
              <button onClick={handleSendMessage}>
                <img src={send} alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
