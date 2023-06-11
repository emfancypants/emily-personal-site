import React from 'react';
import './experiencecard.css'
import { SiPython, SiRstudio, SiPowerbi, SiTableau, SiHtml5, SiCss3, SiReact, SiMicrosoftexcel, SiFigma} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const Experiencecard = () => {
  return (
    <div className='Experiencecard__bg'>
      <div className='Experiencecard__card-text'>
        <h4 className='Experiencecard__card-text-date'>
          May 2023 - Aug 2023
        </h4>
        <h1 className='Experiencecard__card-text-title'>
          Business Development & Marketing Intern
        </h1>
        <h4 className='Experiencecard__card-text-company'>
          Baker McKenzie Wong & Leow
        </h4>
        <p className='Experiencecard__card-text-content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='Experiencecard__card-text-skills'>
          <SiMicrosoftexcel />
        </div>
      </div>
    </div>
  )
}

export default Experiencecard