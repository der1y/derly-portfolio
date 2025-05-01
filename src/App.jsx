// import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className='components'>
      
        <NavBar />
        <AboutMe />
        <Projects />
    </div>
  )
}

export default App
