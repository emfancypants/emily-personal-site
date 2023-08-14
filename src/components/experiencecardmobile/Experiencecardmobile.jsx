import React from 'react';
import './experiencecardmobile.css';

function Experiencecardmobile(props) {
  return (
    <div className='Experiencecardmobile__bg'>
      <div className='Experiencecardmobile__card-text'>
        <h4 className='Experiencecardmobile__card-text-date'>
          {props.date}
        </h4>
        <h1 className='Experiencecardmobile__card-text-title'>
          {props.role}
        </h1>
        <h4 className='Experiencecardmobile__card-text-company'>
          {props.company}
        </h4>
        <p className='Experiencecardmobile__card-text-content'>
          {props.content}
        </p>
        <div className='Experiencecardmobile__card-text-skills'>
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

export default Experiencecardmobile