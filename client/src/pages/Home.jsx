import { Button } from "flowbite-react";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../components/ThemeContext";
import portfolioImage from "/images/pimage.jpeg"
const Home = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className=" grid mt-16 md:mb-8 gap-4 px-4 md:grid-cols-2 md:px-20" id="home">
      <div className="md:m-auto md:mt-32">
        <h1
          className={`text-2xl font-serif ${
            theme === "dark" ? "text-white" : "text-black"
          } font-semibold md:text-7xl`}
        >
          Hello, I'm <br />
          Ankit Kumar
          <span
            className={`italic ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "Python Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p
          className={`text-sm text-justify ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } font-serif mt-3 md:mt-10`}
        >
          I am ANKIT KUMAR, an Electronics and Communication Engineering
          graduate with a strong foundation in technical and engineering
          principles. Currently, I am focusing on honing my IT skills to bridge
          the gap between my academic knowledge and the demands of the modern
          tech industry. My journey includes gaining expertise in full stack
          development, particularly with the MERN stack, and working on various
          projects involving backend systems, live application modifications,
          and payment gateway integrations like Stripe. I am passionate about
          leveraging my engineering background and IT skills to develop
          innovative solutions and contribute effectively to the tech community.
        </p>
        <p
          className={`text-sm text-justify ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } font-serif mt-3 md:mt-4`}
        >
          Feel free to explore my portfolio to see some of the exciting projects
          I’ve worked on. If you’d like to collaborate or just want to say
          hello, don’t hesitate to get in touch!
        </p>
        <Button className="mt-3 font-serif font-semibold hover:!bg-customeButtonColor rounded-none bg-customeButtonColor md:mt-8">
          Say Hello
        </Button>
        <div className="flex justify-around w-full font-serif  flex-row  bg-white p-4 mt-6 mr-10">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">4+</span>
            <span className="text-sm text-gray-500">Languages Know</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">5+</span>
            <span className="text-sm text-gray-500">Full Stack Projects</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">50+</span>
            <span className="text-sm text-gray-500">Packages Know</span>
          </div>
        </div>
      </div>
      <div className="md:grid place-items-center">
        <div className="m-auto mt-8 w-full min-h-screen md:mt-24 md:w-96 md:mr-0 rounded-lg ">
          <img
            className="self-center object-center w-full bg-inherit rounded-lg"
            src={portfolioImage}
            alt="user image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
