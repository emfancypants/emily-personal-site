import React from 'react';
import './projects.css';
import { Projectscard } from '../../components';
import { SiPython, SiRstudio, SiPowerbi, SiHtml5, SiCss3, SiReact, SiMicrosoftexcel, SiFigma, SiFlask, SiDart, SiFlutter, SiFirebase} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='website__proj' id='projects'>
      <div className='website__proj-title'>
        <h1>My Projects</h1>
      </div>
      
      <div className='ProjectsCards'>
        <a className='Projectscard__bg' href='https://github.com/emfancypants/emilys-personal-portfolio' target='blank'>
          <div className='Projectscard__card-pic-bg'>
          </div>
          <div className='Projectscard__card-text'>
            <h1 className='Projectscard__card-text-title'>
              My Personal Portfolio
            </h1>
            <h4 className='Projectscard__card-text-date'>
              June 2023 - Present
            </h4>
            <p className='Projectscard__card-text-content'>
              This website was built with ReactJS, with basic HTML and CSS. Through an archive of past projects and eye catching illustrations, 
              this personal portfolio gives viewers an insight of who Emily is and what she has to offer. 
            </p>
          </div>
          <div className='Projectscard__card-text-skills'>
              <SiHtml5 />
              <SiCss3 />
              <SiReact />
              <SiFigma />
            </div>
        </a>

        <a className='Projectscard__bg' href='https://github.com/ShyamalSankar/Twitter-bot-detection' target='blank'>
          <div className='Projectscard__card-pic-bg'>
          </div>
          <div className='Projectscard__card-text'>
            <h1 className='Projectscard__card-text-title'>
              Twitter Bot or Not?
            </h1>
            <h4 className='Projectscard__card-text-date'>
              March 2023 - April 2023
            </h4>
            <p className='Projectscard__card-text-content'>
            Built primarily with Python and deployed using Flask, this Machine Learning project aims to be able to differentiate bot and human accounts on Twitter, 
            and bot and human generated tweets. Web scrapping, EDA and modeling was performed to find the optimal model for deployment.
            </p>
          </div>
          <div className='Projectscard__card-text-skills'>
              <SiPython />
              <SiFlask />
            </div>
        </a>

        <a className='Projectscard__bg' href='https://github.com/emfancypants/Canny' target='blank'>
          <div className='Projectscard__card-pic-bg'>
          </div>
          <div className='Projectscard__card-text'>
            <h1 className='Projectscard__card-text-title'>
              Orbital 2021 - Apollo Level
            </h1>
            <h4 className='Projectscard__card-text-date'>
              May 2021 - Aug 2021
            </h4>
            <p className='Projectscard__card-text-content'>
            Canny is an Android mobile application that helps university students track their expenses through multiple functions within the application. 
            This includes a receipt function to see past transactions, and a dashboard to view statistics on their spending habits.
            </p>
          </div>
          <div className='Projectscard__card-text-skills'>
              <SiDart />
              <SiFlutter />
              <SiFirebase />
            </div>
        </a>
      </div>
    
    </div>
  )
}

export default Projects