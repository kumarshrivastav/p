import React, { useContext } from 'react'
import ProjectCard from '../components/ProjectCard'
import { ProjectList } from '../utils/ProjectList'
import { ThemeContext } from '../components/ThemeContext'
const Project = () => {
    const {theme}=useContext(ThemeContext)
    return (
    <div className={`${theme === 'dark'?'bg-gray-600':'bg-gray-100'} pb-4 mx-4 md:mx-20`} id='project'>
      <h1 className={`font-serif font-semibold ${theme==='dark'?'text-white':'text-black'} text-2xl text-center mt-4 p-2`}>Projects</h1>
      <hr className=' text-black m-1'/>
      <div className='md:grid md:grid-cols-3'>
        {
            ProjectList.map((project)=>(<ProjectCard key={project.id} project={project}/>))
        }
      </div>
    </div>
  )
}

export default Project
