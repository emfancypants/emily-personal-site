import React from 'react'
import { About, Experience, Footer, Home, Navbar, Projects, Aboutmobile, Experiencemobile, Footermobile, Homemobile, Navbarmobile, Projectsmobile } from './containers';
import { Contacts } from './components';
import './App.css';
import { Responsive } from "./responsive";


// const App = () => {
//   return (
//     <div className='App'>
//       <Navbar />
//       <Contacts />
//       <Home />
//       <About />
//       <Experience />
//       <Projects />
//       <Footer />
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Responsive displayIn={["Laptop"]}>
        <Navbar />
        <Contacts />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </Responsive>
      <Responsive displayIn={["Mobile"]}>
        <Navbarmobile />
        <Homemobile />
        <Aboutmobile />
        <Experiencemobile />
        <Projectsmobile />
        <Footermobile />
      </Responsive>
    </div>
  );
}

export default App