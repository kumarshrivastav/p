import React, { useContext } from 'react'
import {MdSchool} from "react-icons/md"
import { FaUniversity,FaSchool } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from '../components/ThemeContext';
const Education = () => {
    const {theme}=useContext(ThemeContext)
  return (
      <div className={`${theme === 'dark'?'bg-gray-600':'bg-gray-100'} mx-4 md:mx-20`} id='education'>
      <h2 className={`mt-3 text-center ${theme==='dark'&& 'text-white'} font-serif font-semibold  pt-6 text-xl`}>Education Details</h2>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work font-serif"
            contentStyle={{ background: `${theme==='dark'?'#a6acaf':'white'}`, color: 'black' }}
            contentArrowStyle={{ borderRight: `7px solid  ${theme==='dark'?'#a6acaf':'white'}` }}
            date="2020 - 2024"
            iconStyle={{ background: `${theme ==='dark'?'#a6acaf':'#138781'}`, color: `${theme==='dark'?'black':'#fff'}` }}
            icon={<MdSchool/>}
        >
            <h3 className="vertical-timeline-element-title font-semibold">Bachelor of Technology</h3>
            <h4><span>Branch :</span><span> Electronics and Communication Engineering</span></h4>
            <h4><span>CGPA :</span><span> 8.4</span></h4>
            <h4 className="vertical-timeline-element-subtitle  text-sm">LNCT Bhopal, Madhya Pradesh</h4>
            
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work font-serif"
            contentStyle={{ background: `${theme==='dark'?'#a6acaf':'white'}`, color: 'black' }}
            contentArrowStyle={{ borderRight: `7px solid  ${theme==='dark'?'#a6acaf':'white'}` }}
            date="2016 - 2019"
            iconStyle={{ background: `${theme ==='dark'?'#a6acaf':'#138781'}`, color: `${theme==='dark'?'black':'#fff'}` }}
            icon={<FaUniversity/>}                                                                                                                                                                                           
        >
            <h3 className="vertical-timeline-element-title font-semibold">Intermediate</h3>
            <h4><span>Stream : </span><span>Science</span></h4>
            <h4><span>Percentage : </span><span>72.2</span></h4>
            <h4 className="vertical-timeline-element-subtitle">Lalganj Inter College Lalganj, Vaishali, Bihar</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work font-serif"
            contentStyle={{ background: `${theme==='dark'?'#a6acaf':'white'}`, color: 'black' }}
            contentArrowStyle={{ borderRight: `7px solid  ${theme==='dark'?'#a6acaf':'white'}` }}
            date="2015 - 2016"
            iconStyle={{ background: `${theme ==='dark'?'#a6acaf':'#138781'}`, color: `${theme==='dark'?'black':'#fff'}` }}
            icon={<FaSchool/>}
        >
            <h3 className="vertical-timeline-element-title font-semibold">Matriculation</h3>
            <h4><span>Subjects : </span><span>Science, Social Science and Hindi</span></h4>
            <h4><span>Percentage : </span><span>63.3</span></h4>
            <h4 className="vertical-timeline-element-subtitle">Sansaro Ramrati H S Khanjahachak Brindawan Vaishali, Bihar</h4>
            
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
  )
}

export default Education
