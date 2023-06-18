import React from 'react';
import './aboutcard.css'

function Aboutcard(props) {
  return (
    <div className='Aboutcard__card'>
      <div className='Aboutcard__card-pic-bg'>
        <img src={props.picture} alt="" />
      </div>
      <div className='Aboutcard__card-text'>
        <h1 className='Aboutcard__card-text-title'>
          {props.title}
        </h1>
        <p className='Aboutcard__card-text-content'>
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default Aboutcard