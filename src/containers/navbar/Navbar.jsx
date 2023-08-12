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
// const [toggleMenu, setToggleMenu] = useState(false);

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

        {/* <div className="website__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color= '#282C3C' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#282C3C' size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="website__navbar-menu_container scale-up-center">
            <div className="website__navbar-menu_container-links">
              <Menu />
            </div>
            <div className='website__navbar-menu_container-links-resume'>
              <button type='button'>View Resume</button>
            </div>
          </div>
          )}
        </div> */}

      </div>
    </div>
  )
}

export default Navbar