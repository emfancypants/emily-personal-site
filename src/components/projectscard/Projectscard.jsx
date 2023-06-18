import React from 'react';
import './projectscard.css';

function Projectscard(props) {
  return (
    <a className='Projectscard__bg' href={props.link} target='blank'>
      <div className='Projectscard__card-pic-bg'>
        <img className='expimage' src={props.image} alt="" />
      </div>
      <div className='Projectscard__card-text'>
        <h1 className='Projectscard__card-text-title'>
          {props.title}
        </h1>
        <h4 className='Projectscard__card-text-date'>
          {props.duration}
        </h4>
        <p className='Projectscard__card-text-content'>
          {props.content}
        </p>
      </div>
      <div className='Projectscard__card-text-skills'>
          {props.icon1}
          {props.icon2}
          {props.icon3}
          {props.icon4}
          {props.icon5}
        </div> 
    </a>
  )
}

export default Projectscard