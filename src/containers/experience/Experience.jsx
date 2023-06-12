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
        <div className='Experiencecard__bg'>
          <div className='Experiencecard__card-text'>
            <h4 className='Experiencecard__card-text-date'>
              May 2023 - Aug 2023
            </h4>
            <h1 className='Experiencecard__card-text-title'>
              Business Development & <br/> Marketing Intern
            </h1>
            <h4 className='Experiencecard__card-text-company'>
              Baker McKenzie Wong & Leow
            </h4>
            <p className='Experiencecard__card-text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          <div className='Experiencecard__card-text-skills'>
              <SiMicrosoftexcel />
            </div>
        </div>

        <div className='Experiencecard__bg'>
          <div className='Experiencecard__card-text'>
            <h4 className='Experiencecard__card-text-date'>
              May 2022 - Oct 2022
            </h4>
            <h1 className='Experiencecard__card-text-title'>
              Data Summer Analyst
            </h1>
            <h4 className='Experiencecard__card-text-company'>
              TES-AMM Singapore
            </h4>
            <p className='Experiencecard__card-text-content'>
            Maintained, enhanced and created storyboards for data visualisation using Power BI. <br/>
            Restructured workflows using end-to-end ETL processes using AWS cloud services. <br/>
            Wrote automated Python scripts which automated the generation of documents for internal departments. <br/>
            Conducted a Research Study using Machine Learning Techniques for the prediction and forecasting of processing times of assets. <br/>
            </p>
          </div>
          <div className='Experiencecard__card-text-skills'>
              <SiPython />
              <SiPowerbi />
              <SiAmazonaws />
              <GrMysql />
              <SiMicrosoftexcel />
            </div>
        </div>
      </div>

    </div>
  )
}

export default Experience