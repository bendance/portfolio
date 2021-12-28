import './App.css';
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import SideBar from './SideBar';
import React  from 'react';

function App() {

  return (
    <div>
      <SideBar />
      <div class="container-fluid p-0">
        <Home />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Projects />
      </div>
    </div>
  );
}

export default App;
