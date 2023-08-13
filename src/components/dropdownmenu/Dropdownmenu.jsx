import React from 'react';
import './dropdownmenu.css';
import { HiMenu } from "react-icons/hi";
import Dropdown from 'react-bootstrap/Dropdown';


function Dropdownmenu() {
  return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            <HiMenu />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#top">Home</Dropdown.Item>
            <Dropdown.Item href="#about">About</Dropdown.Item>
            <Dropdown.Item href="#experience">Experiences</Dropdown.Item>
            <Dropdown.Item href="#projects">Projects</Dropdown.Item>
            <Dropdown.Item href="https://drive.google.com/file/d/1Rh14MzVFHjDgqfTB9r_OSEzXT_qUJfmG/view?usp=sharing" target='blank'>View Resume</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownmenu