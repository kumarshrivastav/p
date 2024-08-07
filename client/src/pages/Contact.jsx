import React, { useContext } from "react";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../components/ThemeContext";

const Contact = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`${theme==='dark'?'bg-gray-600':'bg-gray-100'} mx-4 md:mx-20`} id="contact">
        <h1 className={`mt-4 text-center ${theme==='dark'?'text-white':'text-black'} font-serif font-semibold  p-2 text-xl`}>Contact Us</h1>
        <hr className=' text-black m-1'/>
      <div className="md:flex">
        <div className="md:flex-1">
          <img className="w-full object-cover" src="images/OIP.jfif" alt="contact image" />
        </div>
        <div className="p-4    md:flex-1">
            <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
