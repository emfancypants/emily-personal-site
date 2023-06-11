import React from 'react'
import { About, Experience, Footer, Home, Navbar, Projects } from './containers';
import { Contacts } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Contacts />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App