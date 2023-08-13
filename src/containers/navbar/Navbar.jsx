import React from 'react';
import './navbar.css';
// import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/emily logo_1.png'

const Menu = () => (
  <>
  <p><a href="#top">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#experience">Experiences</a></p>
  <p><a href="#projects">Projects</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='website__navbar'>
      <div className='website__navbar-links'>
        <div className='website__navbar-links_logo'>
          <img src= {logo} alt="logo" />
        </div>
        <div className='website__navbar-links_container'>
          <Menu />
        </div>
        <div className='website__navbar-resume scale-up-center'>
          <a href="https://drive.google.com/file/d/1Rh14MzVFHjDgqfTB9r_OSEzXT_qUJfmG/view?usp=sharing" target='blank'>
            <button type='button'>View Resume</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Navbar