import React, { useContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { RiDownload2Fill } from "react-icons/ri";
import Resume from "../assets/docs/IT_Resume.pdf";
import socialIcons from "../utils/SocialMediaList";
import FingerPrintJS from "@fingerprintjs/fingerprintjs";
import PopUp from "../components/PopUp";
import { createVisitor } from "../http/http";
import portfolioImage from "/images/pimageabout.jpg"
import { ThemeContext } from "../components/ThemeContext";
const About = () => {
  const [visitorIdentity, setVisitorIdentity] = useState("");
  const { theme } = useContext(ThemeContext);
  const [visitorInfo, setVisitorInfo] = useState({});
  const [verified, setVerified] = useState(null);
  const [seeResumeFlag, setSeeResumeFlag] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [otpStatus, setOtpStatus] = useState(false);
  const openHandleModal = () => {
    if (!verified && seeResumeFlag) {
      setOpenModal(true);
    }
  };
  const closeHandleModal = () => {
    setOpenModal(false);
    setOtpStatus(false);
  };
  FingerPrintJS.load().then((fp) => {
    fp.get().then((result) => {
      const visitorId = result.visitorId;
      setVisitorIdentity(visitorId);
    });
  });
  useEffect(() => {
    async function CreateVisitor(visitorId) {
      try {
        const {
          data: { visitor },
        } = await createVisitor(visitorId);
        setVisitorInfo(visitor);
        setVerified(visitor?.isVerified);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    CreateVisitor(visitorIdentity);
  }, [visitorIdentity]);
  const handleResumeClick = () => {
    setSeeResumeFlag(true);
    setOpenModal(true);
  };
  return (
    <div
      className={`grid gap-4 mt-4 md:grid-cols-2 ${
        theme === "dark" ? "bg-gray-600" : "bg-gray-100"
      } mx-4 md:mx-20`}
      id="about"
    >
      <div className="relative w-full">
        <div className="">
          <img
            className="self-center object-cover h-96 w-96 p-10 m-auto"
            src={portfolioImage}
            alt="user image"
          />
        </div>
        <div className="absolute inset-y-80 inset-x-32 bg-white flex flex-row gap-2 items-center  p-1 h-10 w-max md:inset-x-48 text-black">
          {socialIcons.map((media) => (
            <a
              href={media.url}
              key={media.id}
              target="__blank"
              className="p-1 cursor-pointer  text-textColor hover:bg-customeButtonColor hover:text-white"
            >
              <media.icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-8 pb-8 md:py-10">
        <h1
          className={`text-2xl font-semibold font-serif ${
            theme === "dark" ? "text-white" : "text-black"
          } text-center md:text-left`}
        >
          I am a Full Stack Developer <br />
          In MERN Stack Development
        </h1>
        <p
          className={`text-sm font-serif text-justify py-2 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          Hello! I'm Ankit Kumar, a passionate Full Stack Developer with
          expertise in the MERN stack. With a keen eye for detail and a deep
          understanding of both frontend and backend technologies, I love
          transforming ideas into efficient and scalable web applications.
        </p>
        <p
          className={`text-sm font-serif text-justify py-2 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          I have honed my skills in building dynamic and responsive user
          interfaces using React, while also mastering backend development with
          Node.js, Express, and MongoDB. My journey as a developer has been
          driven by a continuous desire to learn and adapt to new technologies,
          ensuring that I stay at the forefront of the ever-evolving tech
          landscape.
        </p>
        <div className="flex flex-row gap-10 my-4">
          <Button
            onClick={handleResumeClick}
            className="rounded-none bg-customeButtonColor font-serif hover:cursor-pointer hover:!bg-white hover:!text-customeButtonColor hover:border-2 hover:border-textColor"
          >
            <a
              href={
                verified && "https://api.whatsapp.com/send?phone=918227870013"
              }
              target={verified && "__blank"}
              rel="noreferrer"
            >
              Hire Me
            </a>{" "}
          </Button>
          <div
            className={`flex flex-row gap-2 p-1 text-textColor items-center border-2 ${
              theme === "dark" &&
              "text-white bg-customeButtonColor hover:!bg-transparent hover:!text-white"
            } border-textColor hover:cursor-pointer hover:bg-customeButtonColor hover:text-white`}
            onClick={handleResumeClick}
          >
            <RiDownload2Fill size={20} className="" />
            <a
              className="font-serif"
              href={verified && Resume}
              download="ANKIT_KUMAR_RESUME"
            >
              Download Resume
            </a>
          </div>
          {!verified && seeResumeFlag && (
            <PopUp
              openHandleModal={openHandleModal}
              closeHandleModal={closeHandleModal}
              openModal={openModal}
              setOpenModal={setOpenModal}
              visitorId={visitorIdentity}
              verified={verified}
              setVerified={setVerified}
              otpStatus={otpStatus}
              setOtpStatus={setOtpStatus}
            />
          )}
        </div>
        {!verified && (
          <span
            className="text-sm font-serif text-red-600 cursor-pointer"
            onClick={handleResumeClick}
          >
            Verify your identify here...
          </span>
        )}
      </div>
    </div>
  );
};

export default About;
