// import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ProjectService from './services/ProjectService';
import { ProjectContext } from './context/ProjectContext';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [projects, setProjects] = useState(ProjectService.getProjects);

  useEffect(() => {
    setProjects(ProjectService.getProjects());
  }, []);

  return (
    <div>
      <ProjectContext.Provider value={projects}>
        <NavBar />
        <AboutMe />
        <Projects />
      </ProjectContext.Provider>
    </div>
  )
}

export default App
