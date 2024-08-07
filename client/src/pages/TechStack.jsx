import React, { useContext } from "react";
import { TechstackList } from "../utils/TechStackItems";
import TechStackComponent from "../components/TechStackComponent";
import { ThemeContext } from "../components/ThemeContext";
const TechStack = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={` ${
      theme === "dark" ? "bg-gray-600" : "bg-gray-100"
    } mx-4 md:mx-20" `} id="techstack">
      <h2 className={`font-serif font-semibold ${theme === 'dark' ?'text-white':'text-black'} text-2xl text-center mt-4 p-2`}>
        Technologies Stack
      </h2>
      <hr />
      <p className={`font-serif ${theme==='dark'&&'text-white'} text-sm text-center p-2 text-stone-500`}>
        👉 including programming languages, frameworks, databases, front-end and
        back-end and APIs
      </p>

      <div className="py-2 md:grid md:grid-cols-3 md:gap-2 md:mx-2">
        {TechstackList.map((tech) => (
          <TechStackComponent key={tech._id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
