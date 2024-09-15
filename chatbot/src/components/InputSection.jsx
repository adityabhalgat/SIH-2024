import React from "react";
import translate from "/InputSection/translate.png";
import mic from "/InputSection/mic.png";
import send from "/InputSection/send.png";

export default function InputSection() {
  return (
    <div className="w-[450px] flex flex-row justify-between bg-[#052f44]">
      <div className="w-16 pt-2">
        <button>
          <img src={translate} />
        </button>
      </div>
      <div className="w-72 py-5">
        <input
          className="w-full h-8 border-2 rounded-md p-2"
          placeholder="Type here..."
        ></input>
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-6 pt-4">
          <button>
            <img src={mic} />
          </button>
        </div>
        <div className="w-10 pt-5 pr-2">
          <button>
            <img src={send} />
          </button>
        </div>
      </div>
    </div>
  );
}
