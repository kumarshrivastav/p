import React, { useContext } from 'react'
import { Card } from "flowbite-react";
import MyPlyrVideo from './MyPlyrVideo';
import { ThemeContext } from './ThemeContext';
const ProjectCard = ({project}) => {
  const {theme}=useContext(ThemeContext)
  return (

        <div className='flex flex-col gap-4 border-2 pt-0 border-gray-400 rounded-md mx-6 my-4'>
        <div className=''>
        <MyPlyrVideo path={project.path}/>
        </div>
        <div className='relative flex flex-col font-serif text-sm mx-1 h-full'> 
            <h1 className={`font-semibold text-lg  ${theme==='dark'?'text-gray-300':'text-gray-500'} `}>Project Name : <span className='italic'>{project.name}</span></h1>
            <p className={`text-sm ${theme==='dark'?'text-gray-300':'text-gray-600'} mt-4`}>Project Description : <span className='italic text-justify'>{project.description}</span></p>
            <p className={`text-xs ${theme==='dark'?'text-gray-300':'text-gray-600'} mt-4 mb-6`}>Tech Used : <span className='italic text-justify'>{project.techUsed}</span></p>
            <a href={project.url} target='__blank' className={`absolute bottom-0 right-0 text-right  font-serif text-sm pb-2 ${theme==='dark'?'text-yellow-400':'text-blue-500'} font-bold cursor-pointer`}>Live here...</a>
        </div>
        </div>
    
  )
}

export default ProjectCard
