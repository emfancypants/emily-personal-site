import React from 'react';
import './homemobile.css';
import { BsMouse } from "react-icons/bs";


const Homemobile = () => {
  return (
    <div className='website__homemobile-whole'>
      <div className='website__homemobile'>
        <div className='website__homemobile-intro'>
          <h4>Hey there, my name is</h4>
          <h1>
            Emily Kok
          </h1>
          <h4>
            I am all about finding the middle ground between Data and Design
          </h4>
        </div>
        <a className='website__homemobile-scroll' href='#aboutmobile'>
          <button className='website__homemobile-scroll-mouse' type='button'>
            <BsMouse />
            Scroll to find out more!
          </button>
        </a>
      </div>
    </div>
  )
}

export default Homemobile