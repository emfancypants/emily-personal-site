import React from 'react';
import './home.css'
import emoji from '../../assets/smiley emoji.png'
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <div className='website__home'>
      <div className='website__home-intro'>
        <h4 id='start'>Hey there, my name is</h4>
        <h1 id='name'>
          Emily Kok
          <img src= {emoji} alt="logo" />
        </h1>
        <h4 id='context'>
          I am all about finding the middle ground <br/>between Data and Design
        </h4>
      </div>
      <a className='website__home-scroll' href='#about'>
        <button className='website__home-scroll-mouse' type='button'>
          <BsMouse />
          Scroll to find out more!
        </button>
      </a>
    </div>
  )
}

export default Home