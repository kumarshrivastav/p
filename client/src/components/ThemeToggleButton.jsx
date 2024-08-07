import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Button } from 'flowbite-react'
import { IoIosSunny, IoIosMoon} from "react-icons/io";
const ThemeToggleButton = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <Button onClick={toggleTheme} className={`rounded-full ${theme==='dark'?'bg-white hover:!bg-white':'bg-black hover:!bg-black'} border-2 border-cyan-300`}>
    {theme === 'light' ? <IoIosMoon size={20} color={'white'}/> : <IoIosSunny size={20} color={'black'}/>}
    </Button>
  )
}

export default ThemeToggleButton
