import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Load theme from localStorage or default to light
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-[9.7px] py-[4px] ml-5 rounded-full bg-gray-200 
      dark:bg-gray-700 transition-all duration-300 shadow-md hover:scale-105"
    >
      {isDark ? (
        <i className="ri-sun-line text-[24px] text-yellow-400 transition-transform duration-300"></i>
      ) : (
        <i className="ri-moon-fill text-[25px] text-gray-800 dark:text-gray-200 transition-transform duration-300"></i>
      )}
    </button>
  );
};

export default DarkModeToggle;
