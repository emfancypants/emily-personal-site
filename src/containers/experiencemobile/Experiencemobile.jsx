import React from 'react';
import './experiencemobile.css';
import { Experiencecardmobile } from '../../components';
import { SiPython, SiRstudio, SiPowerbi, SiTableau, SiHtml5, SiCss3, SiReact, SiMicrosoftexcel, SiFigma, SiAmazonaws} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const Experiencemobile = () => {
  return (
    <div className='websitemobile__exp' id='experiencemobile'>
      <div className='websitemobile__exp-title'>
        <h1>My Skills and Experiences</h1>
      </div>
      <div className='Skillscardsmobile'>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiPython />
          </div>
          <div className='Skillsmobile_text'>
            <h4>Python</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <GrMysql />
          </div>
          <div className='Skillsmobile_text'>
            <h4>SQL</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiRstudio />
          </div>
          <div className='Skillsmobile_text'>
            <h4>R Studio</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <FaJava />
          </div>
          <div className='Skillsmobile_text'>
            <h4>Java</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiPowerbi />
          </div>
          <div className='Skillsmobile_text'>
            <h4>PowerBI</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiTableau />
          </div>
          <div className='Skillsmobile_text'>
            <h4>Tableau</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiHtml5 />
          </div>
          <div className='Skillsmobile_text'>
            <h4>HTML</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiCss3 />
          </div>
          <div className='Skillsmobile_text'>
            <h4>CSS</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiReact />
          </div>
          <div className='Skillsmobile_text'>
            <h4>ReactJS</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiMicrosoftexcel />
          </div>
          <div className='Skillsmobile_text'>
            <h4>Excel</h4>
          </div>
        </div>

        <div className='Skillsmobile_addtext'>
          <div className='Skillsmobile__bg'>
            <SiFigma />
          </div>
          <div className='Skillsmobile_text'>
            <h4>Figma</h4>
          </div>
        </div>
     

      </div>

      <div className='ExperienceCardsmobile'>

        <Experiencecardmobile date = "May 2023 - Aug 2023" role = "Business Development & Marketing Intern" company ="Baker McKenzie Wong & Leow" 
        content = {<> <span>• Led the successful planning of a regional event attended by 150 participants.</span><br/><span>• Utilized data analysis techniques to prepare a yearly event report to derive valuable insights for future prospects.</span><br/><span>• Compiled business research reports for client profiling to support strategic decision-making and enhance client relationships.</span><br/><span>• Crafted capability statements to secure new businesses to present the firm's strengths and unique value proposition to resonate with potential clients.</span><br/><span>• Prepared monthly client alerts and newsletters to deliver relevant and timely information to clients and partners.</span></>}
        icon1 = {<SiMicrosoftexcel/>} />

        <Experiencecardmobile date = "May 2022 - Oct 2022" role = "Data Summer Analyst" company ="TES-AMM Singapore" 
        content = {<> <span>• Maintained and Enhanced Group Financial storyboards using Microsoft Power BI to visualize financial data and provide meaningful insights for the company.</span><br/><span>• Restructured the Value Recovery Workflow using end-to-end ETL processes using AWS cloud services (S3, Lambda, Glue, Athena, Redshift).</span><br/><span>• Wrote automated Python scripts to generate reports using Excel sheets which helped the Marketing Department save 10 minutes per report generated.</span><br/><span>• Conducted a Research Study using Machine Learning Techniques for the prediction and forecasting of processing times of assets.</span></>}
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

export default Experiencemobile