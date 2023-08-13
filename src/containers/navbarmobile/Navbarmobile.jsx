import React from 'react';
import './navbarmobile.css';
import logo from '../../assets/emily logo_1.png';
import { HiDocumentText } from "react-icons/hi";


const Menumobile = () => (
  <>
    <p><a href="#top">Home</a></p>
    <p><a href="#aboutmobile">About</a></p>
    <p><a href="#experiencemobile">Experiences</a></p>
    <p><a href="#projectsmobile">Projects</a></p>
  </>
)

const Navbarmobile = () => {
  return (
    <div className='website__navbarmobile'>
        <div className='website__navbarmobile_logo'>
          <img src= {logo} alt="logo" />
        </div>
        <div className='website__navbarmobile_container'>
          <Menumobile />
        </div>
        <div className='website__navbarmobile-resume scale-up-center'>
          <a href="https://drive.google.com/file/d/1Rh14MzVFHjDgqfTB9r_OSEzXT_qUJfmG/view?usp=sharing" target='blank'>
            <button className='website__navbarmobile-resume-icon' type='button'>
              <HiDocumentText />
            </button>
          </a>
        </div>
    </div>
  )
}

export default Navbarmobile