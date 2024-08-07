import { Link } from "react-router-dom";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
function Header() {
  const { theme } = useContext(ThemeContext);
  const handleMenuClick = () => {};
  return (
    <Navbar
      className={`fixed top-0 left-0 w-full z-10 px-10 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200"
      } font-serif`}
    >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <div className="self-center whitespace-nowrap text-xl font-semibold font-serif border-4 rounded-lg hover:bg-customeButtonColor hover:text-white border-textColor p-2 dark:text-white">
          ANKIT'S
        </div>
      </Navbar.Brand>
      <ThemeToggleButton />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          className="w-full cursor-pointer"
          offset={-100}
          duration={100}
          onClick={handleMenuClick}
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>
            Home
          </Navbar.Link>
        </ScrollLink>

        <ScrollLink
          to="about"
          spy={true}
          className="w-full cursor-pointer"
          smooth={true}
          offset={-100}
          duration={100}
          onClick={handleMenuClick}
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>
            About
          </Navbar.Link>
        </ScrollLink>

        <ScrollLink
          to="education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          onClick={handleMenuClick}
          className="w-full cursor-pointer"
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>Education</Navbar.Link>
        </ScrollLink>

        <ScrollLink
          to="techstack"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          onClick={handleMenuClick}
          className="w-full cursor-pointer"
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>TechStack</Navbar.Link>
        </ScrollLink>

        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="w-full cursor-pointer"
          onClick={handleMenuClick}
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>Projects</Navbar.Link>
        </ScrollLink>

        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="w-full cursor-pointer"
          onClick={handleMenuClick}
        >
          <Navbar.Link className={`${theme==='dark'&&'text-white hover:text-black'}`}>Contact</Navbar.Link>
        </ScrollLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
