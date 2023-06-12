import React from 'react';
import './footer.css';
import {MdKeyboardDoubleArrowUp} from 'react-icons/md';

const Footer = () => {
  return (
    <div className='Footer_bg'>
      <p className='copyright'>© 2023 Copyright - Emily Kok</p>
      <a href="#top" className='button_up'>
        <button type='button' >
          <MdKeyboardDoubleArrowUp />
        </button>
      </a>
    </div>
  )
}

export default Footer