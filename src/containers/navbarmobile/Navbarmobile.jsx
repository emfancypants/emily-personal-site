import React from 'react';
import './navbarmobile.css';
import logo from '../../assets/emily logo_1.png';
import { Dropdownmenu } from '../../components';



const Navbarmobile = () => {
  return (
    <div className='website__navbarmobile'>
      <div className='website__navbarmobile-links'>
        <div className='website__navbarmobile-links_logo'>
          <img src= {logo} alt="logo" />
        </div>
      </div>
      <Dropdownmenu />
    </div>
  )
}

export default Navbarmobile