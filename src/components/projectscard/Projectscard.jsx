import React from 'react';
import './projectscard.css';
import { SiPython, SiRstudio, SiPowerbi, SiTableau, SiHtml5, SiCss3, SiReact, SiMicrosoftexcel, SiFigma, SiAmazonaws} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const Projectscard = () => {
  return (
    <div className='Projectscard__bg'>
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
          <SiMicrosoftexcel />
        </div>
    </div>
  )
}

export default Projectscard