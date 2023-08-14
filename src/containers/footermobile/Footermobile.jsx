import React from 'react';
import './footermobile.css';
import {MdKeyboardDoubleArrowUp} from 'react-icons/md';
import { SiGmail, SiInstagram, SiTelegram, SiLinkedin, SiGithub } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";



const Footermobile = () => {
  return (
    <div className='Footermobile_bg'>
      <div className='Footermobile_contacts'>
        <h3>Contacts</h3>
        <div className='websitemobile__contacts'>
          <a href="mailto:1772kfn@gmail.com" target="_blank">
              <SiGmail />
          </a>
          <a href="https://www.instagram.com/em_fancypants/" target="_blank">
              <SiInstagram />
          </a>
          <a href="https://t.me/emfancypants" target="_blank">
              <SiTelegram />
          </a>
          <a href="https://www.linkedin.com/in/emilykok/" target="_blank">
              <SiLinkedin />
          </a>
          <a href="https://github.com/emfancypants" target="_blank">
              <SiGithub />
          </a>
          <a href="https://drive.google.com/file/d/1Rh14MzVFHjDgqfTB9r_OSEzXT_qUJfmG/view?usp=sharing" target='blank'>
              <IoMdDocument />
          </a>
        </div>
      </div>
      <div className='Footermobile_bg_inner'>
        <p className='copyrightmobile'>© 2023 Copyright - Emily Kok</p>
        <a href="#top" className='button_upmobile'>
          <button type='button' >
            <MdKeyboardDoubleArrowUp />
          </button>
        </a>
      </div>
    </div>
  )
}

export default Footermobile