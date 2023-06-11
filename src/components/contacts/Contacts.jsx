import React from 'react';
import './contacts.css'
import { SiGmail, SiInstagram, SiTelegram, SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";


const Contacts = () => {
  return (
    <div className='website__contacts'>
      <a href="https://www.google.com/" target="_blank">
          <SiGmail />
      </a>
      <a href="https://www.google.com/" target="_blank">
          <SiInstagram />
      </a>
      <a href="https://www.google.com/" target="_blank">
          <SiTelegram />
      </a>
      <a href="https://www.google.com/" target="_blank">
          <SiLinkedin />
      </a>
      <a href="https://www.google.com/" target="_blank">
          <SiGithub />
      </a>


    </div>
  )
}

export default Contacts