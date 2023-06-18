import React from 'react';
import './about.css'
import { Aboutcard } from '../../components';
import student from '../../assets/student.png'
import coder from '../../assets/coder.png'
import artist from '../../assets/artist.png'


const About = () => {
  return (
    <div className='website__about' id='about'>
      <div className='website__about-title'>
        <h1>I am a...</h1>
      </div>

      <div className='Aboutcards'>

        <Aboutcard picture = {student} title = "Student" content = "I am a Year 3 Undergraduate Majoring in Business Analytics with a Specialization in Marketing at the National University of Singapore (NUS)" />
        <Aboutcard picture = {coder} title = "Aspiring Data Analyst" content = "I thoroughly enjoy bringing insights to data through Automations, Data Visualizations and EDA to help businesses make better decisions" />
        <Aboutcard picture = {artist} title = "Creative" content = "Outside of school, I continue to pursue my interests in graphic design and UI/UX design by constantly challenging myself with self initiated projects" />
      </div>

    </div>
  )
}

export default About