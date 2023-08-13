import React from 'react';
import './aboutcardmobile.css'

function Aboutcardmobile(props) {
    return (
      <div className='Aboutcardmobile__card'>
        <div className='Aboutcardmobile__card-pic-bg'>
          <img src={props.picture} alt="" />
        </div>
        <div className='Aboutcardmobile__card-text'>
          <h1 className='Aboutcardmobile__card-text-title'>
            {props.title}
          </h1>
          <p className='Aboutcardmobile__card-text-content'>
            {props.content}
          </p>
        </div>
      </div>
    )
  }

export default Aboutcardmobile