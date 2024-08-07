import Header from "./components/Header"
import {BrowserRouter, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ThemeToggleButton from './components/ThemeToggleButton'
import Education from "./pages/Education"
import Layout from "./components/Layout"
import ScrollToTop from "react-scroll-to-top";
import TechStack from "./pages/TechStack"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
// import { Footer } from "flowbite-react"
function App() {
  return (
  <BrowserRouter>
  <Header/>
  
  <Layout>
  <Home/>
  <About/>
  <Education/>
  <TechStack/>
  <Project/>
  <Contact/>
  <ScrollToTop smooth className="!bg-customeButtonColor !rounded-full !flex !justify-center !m-auto !items-center"  color='#f29f67'/>
  </Layout>
  <Footer/>
  
  
  </BrowserRouter>
  )
}
export default App
