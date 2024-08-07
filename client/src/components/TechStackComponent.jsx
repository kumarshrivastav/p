import React, { useContext } from 'react'
import { Button, Card } from "flowbite-react";
import { ThemeContext } from './ThemeContext';
const TechStackComponent = ({tech}) => {
  const {theme}=useContext(ThemeContext)
  return (
    <Card className={`mx-2 my-2 cursor-pointer group border-4 border-textColor hover:bg-customeButtonColor ${theme ==='dark' && 'bg-slate-400 hover:bg-cyan-700 hover:!text-yellow-400'} hover:transition-all hover:duration-1000 hover:text-white`}>
      <h5 className={`flex flex-row items-center justify-center gap-2 `}>
        {<tech.icon size={25} className={`text-textColor ${theme === 'dark'&&'!text-white'}  group-hover:text-white `}/>}<span className={`font-serif font-semibold ${theme === 'dark'&&'!text-white'} text-textColor group-hover:text-white`}>{tech.name}</span>
      </h5>
      
    </Card>
  )
}

export default TechStackComponent

