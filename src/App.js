import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${
        hover || active ? "bg-pink-800" : "bg-white-200"
      } w-64 shadow-lg rounded m-6 p-2 cursor-pointer `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <div className="flex">
        <div className="w-16 bg-pink-600 rounded-full h-16"></div>
        <div className="ml-4 p-2">
          <h1
            className={`font-bold ${
              hover || active ? `text-white` : `text-black`
            }`}
          >
            Beauty
          </h1>
          <div className="flex items-center">
            <h1
              className={`font-bold ${
                hover || active ? "text-white" : "text-purple-800"
              }`}
            >
              25
            </h1>
            <h1
              className={`text-sm ml-2 ${
                hover || active ? "text-white" : "text-gray-700"
              }`}
            >
              {" "}
              Collaborators
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
