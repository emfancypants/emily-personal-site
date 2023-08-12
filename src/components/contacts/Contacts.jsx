import React from 'react';
import './contacts.css'
import { SiGmail, SiInstagram, SiTelegram, SiLinkedin, SiGithub } from "react-icons/si";


const Contacts = () => {
  return (
    <div className='website__contacts'>
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


    </div>
  )
}

export default Contacts