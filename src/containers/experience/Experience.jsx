import React from 'react';
import { Experiencecard } from '../../components';
import './experience.css'
import { SiPython, SiRstudio, SiPowerbi, SiTableau, SiHtml5, SiCss3, SiReact, SiMicrosoftexcel, SiFigma, SiAmazonaws} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";


const Experience = () => {
  return (
    <div className='website__exp' id='experience'>
      <div className='website__exp-title'>
        <h1>My Skills and Experiences</h1>
      </div>
      <div className='Skillscards'>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiPython />
          </div>
          <div className='Skills_text'>
            <h4>Python</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <GrMysql />
          </div>
          <div className='Skills_text'>
            <h4>SQL</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiRstudio />
          </div>
          <div className='Skills_text'>
            <h4>R Studio</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <FaJava />
          </div>
          <div className='Skills_text'>
            <h4>Java</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiPowerbi />
          </div>
          <div className='Skills_text'>
            <h4>PowerBI</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiTableau />
          </div>
          <div className='Skills_text'>
            <h4>Tableau</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiHtml5 />
          </div>
          <div className='Skills_text'>
            <h4>HTML</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiCss3 />
          </div>
          <div className='Skills_text'>
            <h4>CSS</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiReact />
          </div>
          <div className='Skills_text'>
            <h4>ReactJS</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiMicrosoftexcel />
          </div>
          <div className='Skills_text'>
            <h4>Excel</h4>
          </div>
        </div>

        <div className='Skills_addtext'>
          <div className='Skills__bg'>
            <SiFigma />
          </div>
          <div className='Skills_text'>
            <h4>Figma</h4>
          </div>
        </div>
     

      </div>

      <div className='ExperienceCards'>

        <Experiencecard date = "May 2023 - Aug 2023" role = "Business Development & Marketing Intern" company ="Baker McKenzie Wong & Leow" 
        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        icon1 = {<SiMicrosoftexcel/>} />

        <Experiencecard date = "May 2022 - Oct 2022" role = "Data Summer Analyst" company ="TES-AMM Singapore" 
        content = {<> <span>Maintained, enhanced and created storyboards for data visualisation using Power BI.</span><br/><span>Restructured workflows using end-to-end ETL processes using AWS cloud services.</span><br/><span>Wrote automated Python scripts which automated the generation of documents for internal departments.</span><br/><span>Conducted a Research Study using Machine Learning Techniques for the prediction and forecasting of processing times of assets.</span></>}
        icon1 = {<SiPython />} 
        icon2 = {<SiPowerbi />}
        icon3 = {<SiAmazonaws />}
        icon4 = {<GrMysql />}
        icon5 = {<SiMicrosoftexcel />}
        />
        
      </div>

    </div>
  )
}

export default Experience