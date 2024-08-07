import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Footer = () => {
  const year = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full p-4 ${
        theme === "dark" ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
      } font-serif text-center font-semibold`}
    >
      ANKIT KUMAR &copy; {year}
    </div>
  );
};

export default Footer;
