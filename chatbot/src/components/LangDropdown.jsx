import React, { useState, useRef, useEffect } from "react";
import translate from "/InputSection/translate.png";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="bg-[#346db3] rounded-md mt-3">
        <button
          onClick={toggleDropdown}
          className={`p-2 transition-colors ${
            isOpen ? "bg-[#1e3a8a]" : "bg-[#346db3]"
          } rounded-md`}
        >
          <img src={translate} alt="Translate" className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`absolute bottom-full right-[-70px] w-auto bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-600 ${
          isOpen
            ? "transform translate-y-0"
            : "transform translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <button
            onClick={() => handleLanguageChange("English")}
            className={`px-4 py-2 w-24 rounded-full hover:bg-[#3973bb] hover:rounded-full hover:font-bold text-gray-800 transition ${
              currentLanguage == "English" ? "bg-[#3973bb] font-bold" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("English")}
            className={`px-4 py-2 w-24 rounded-full hover:bg-[#3973bb] hover:rounded-full hover:font-bold text-gray-800 transition ${
              currentLanguage == "Hindi" ? "bg-[#3973bb] font-bold" : ""
            }`}
          >
            Hindi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
