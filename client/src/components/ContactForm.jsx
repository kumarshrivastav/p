import React, { useContext, useState } from "react";
import FingerPrintJS from "@fingerprintjs/fingerprintjs";
import { createContact } from "../http/http";
import toast from "react-hot-toast";
import { Button, Spinner } from "flowbite-react";
import { ThemeContext } from "./ThemeContext";
const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [visitorIdentity, setVisitorIdentity] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };
  FingerPrintJS.load().then((fp) => {
    fp.get().then((result) => {
      const visitorId = result.visitorId;
      setVisitorIdentity(visitorId);
    });
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedContactInfo = { ...contactInfo, visitorId: visitorIdentity };
    try {
      const { data } = await createContact(updatedContactInfo);
      toast.success(data?.message);
      setLoading(false);
      setContactInfo({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setContactInfo({});
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col w-full font-serif" onSubmit={handleSubmit}>
      <div>
        <label
          className={`w-full ${
            theme === "dark" ? "text-white" : "text-black"
          } font-semibold`}
          htmlFor="name"
        >
          Name:
        </label>
        <input
          className={`w-full ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-200 text-gray-500"
          }`}
          type="text"
          id="name"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
          placeholder="enter your name"
          required
        />
      </div>
      <br />
      <div>
        <label
          htmlFor="email"
          className={`w-full ${
            theme === "dark" ? "text-white" : "text-black"
          } font-semibold`}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
          placeholder="enter your email"
          className={`italic ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-200 text-gray-500"
          } w-full`}
          required
        />
      </div>
      <br />
      <div>
        <label
          className={`w-full ${
            theme === "dark" ? "text-white" : "text-black"
          } font-semibold`}
          htmlFor="message"
        >
          Message:
          <br />
        </label>
        <textarea
          className={`w-full italic ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-200 text-gray-500"
          } `}
          minLength={25}
          value={contactInfo.message}
          onChange={handleChange}
          id="message"
          name="message"
          placeholder="enter your message here..."
          required
        />
      </div>
      {loading ? (
        <Button
          disabled={loading}
          className="font-serif rounded-none  bg-customeButtonColor hover:!border-2 hover:!border-customeButtonColor hover:!bg-white hover:!text-customeButtonColor hover:!outline-none  "
        >
          <Spinner aria-label="Spinner button example" size="sm" />
          <span className="pl-3">please wait...</span>
        </Button>
      ) : (
        <button
          type="submit"
          className={`border-2 text-lg  w-full text-center p-2 mt-4  hover:cursor-pointer hover:!transition-shadow hover:!duration-1000  ${
            theme === "dark"
              ? "text-cyan-600 hover:text-white border-cyan-500 hover:bg-cyan-600"
              : "hover:text-white hover:bg-customeButtonColor border-textColor"
          }`}
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default ContactForm;
