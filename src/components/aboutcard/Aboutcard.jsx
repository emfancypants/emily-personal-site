import React from 'react';
import './aboutcard.css'
import student from '../../assets/student.png'

const Aboutcard = (props) => {
  return (
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
  )
}

export default Aboutcard