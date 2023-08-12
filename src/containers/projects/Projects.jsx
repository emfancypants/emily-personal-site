import React from 'react';
import './projects.css';
import { Projectscard } from '../../components';
import { SiPython, SiCss3, SiReact, SiFigma, SiFlask, SiDart, SiFlutter, SiFirebase} from "react-icons/si";

import canny from '../../assets/canny.png'
import twitter from '../../assets/twitter.png'
import website from '../../assets/website.png'

const Projects = () => {
  return (
    <div className='website__proj' id='projects'>
      <div className='website__proj-title'>
        <h1>My Projects</h1>
      </div>


      <div className='ProjectsCards'>
        <Projectscard link = 'https://github.com/emfancypants/emfancypants.github.io' image = {website} title = "My Personal Portfolio" duration = "June 2023 - Present"
        content = "This website was built with ReactJS with basic CSS, and deployed on Netlify. Through an archive of past projects and experiences, this personal portfolio gives viewers an insight of who Emily is and what she has to offer."
        icon1 = {<SiCss3 />}
        icon2 = {<SiReact />}
        icon3 = {<SiFigma />} />

        <Projectscard link = 'https://github.com/ShyamalSankar/Twitter-bot-detection' image = {twitter} title = "Twitter Bot or Not?" duration = "March 2023 - April 2023"
        content = "Built primarily with Python and deployed using Flask, this Machine Learning project aims to be able to differentiate bot and human accounts on Twitter, and bot and human generated tweets. Web scrapping, EDA and modeling was performed to find the optimal model for deployment."
        icon1 = {<SiPython />} 
        icon2 = {<SiFlask />} />

        <Projectscard link = 'https://github.com/emfancypants/Canny' image = {canny} title = "Orbital 2021 - Apollo Level" duration = "May 2021 - Aug 2021"
        content = "Canny is an Android mobile application that helps university students track their expenses through multiple functions within the application. This includes a receipt function to see past transactions, and a dashboard to view statistics on their spending habits."
        icon1 = {<SiDart />} 
        icon2 = {<SiFlutter />}
        icon3 = {<SiFirebase />} />

      </div>
    
    </div>
  )
}

export default Projects