import React from 'react';
import './aboutmobile.css';
import { Aboutcardmobile } from '../../components';
import student from '../../assets/student.png'
import coder from '../../assets/coder.png'
import artist from '../../assets/artist.png'

const Aboutmobile = () => {
  return (
    <div className='website__aboutmobile' id='aboutmobile'>
      <div className='website__aboutmobile-title'>
        <h1>I am a...</h1>
      </div>

      <div className='Aboutmobilecards'>

        <Aboutcardmobile picture = {student} title = "Student" content = "I am a Year 4 Undergraduate Majoring in Business Analytics with a Specialization in Marketing at the National University of Singapore (NUS)" />
        <Aboutcardmobile picture = {coder} title = "Aspiring Data Analyst" content = "I thoroughly enjoy bringing insights to data through Automations, Data Visualizations and EDA to help businesses make better decisions" />
        <Aboutcardmobile picture = {artist} title = "Creative" content = "Outside of school, I continue to pursue my interests in graphic design and UI/UX design by constantly challenging myself with self initiated projects" />
      </div>

    </div>
  )
}

export default Aboutmobile