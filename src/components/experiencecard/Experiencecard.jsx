import React from 'react';
import './experiencecard.css'

function Experiencecard(props) {
  return (
    <div className='Experiencecard__bg'>
      <div className='Experiencecard__card-text'>
        <h4 className='Experiencecard__card-text-date'>
          {props.date}
        </h4>
        <h1 className='Experiencecard__card-text-title'>
          {props.role}
        </h1>
        <h4 className='Experiencecard__card-text-company'>
          {props.company}
        </h4>
        <p className='Experiencecard__card-text-content'>
          {props.content}
        </p>
        <div className='Experiencecard__card-text-skills'>
          {props.icon1}
          {props.icon2}
          {props.icon3}
          {props.icon4}
          {props.icon5}
        </div>
      </div>
    </div>
  )
}

export default Experiencecard