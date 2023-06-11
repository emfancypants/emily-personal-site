import React from 'react';
import './about.css'
import { Aboutcard } from '../../components';
import student from '../../assets/student.png'
import coder from '../../assets/coder.png'
import artist from '../../assets/artist.png'


const About = () => {
  return (
    <div className='website__about'>
      <div className='website__about-title'>
        <h1>I am a...</h1>
      </div>

      <div className='Aboutcards'>

        <div className='Aboutcard__card'>
          <div className='Aboutcard__card-pic-bg'>
            <img src={student} alt="" />
          </div>
          <div className='Aboutcard__card-text'>
            <h1 className='Aboutcard__card-text-title'>
              Student
            </h1>
            <p className='Aboutcard__card-text-content'>
              I am a Year 3 Undergraduate Majoring in Business Analytics with a Specialization in Marketing at the National University of Singapore (NUS)
            </p>
          </div>
        </div>

        <div className='Aboutcard__card'>
          <div className='Aboutcard__card-pic-bg'>
            <img src={coder} alt="" />
          </div>
          <div className='Aboutcard__card-text'>
            <h1 className='Aboutcard__card-text-title'>
              Aspiring Data Analyst
            </h1>
            <p className='Aboutcard__card-text-content'>
              I thoroughly enjoy bringing insights to data through Automations, Data Visualizations and EDA to help businesses make better decisions
            </p>
          </div>
        </div>

        <div className='Aboutcard__card'>
          <div className='Aboutcard__card-pic-bg'>
            <img src={artist} alt="" />
          </div>
          <div className='Aboutcard__card-text'>
            <h1 className='Aboutcard__card-text-title'>
              Creative
            </h1>
            <p className='Aboutcard__card-text-content'>
              Outside of school, I continue to pursue my interests in graphic design and UI/UX design by constantly challenging myself with self initiated projects
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About