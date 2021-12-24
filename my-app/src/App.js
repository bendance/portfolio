import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Works from './Works';
import Connect from './Connect';

function App() {
  return (
    <div className="App">
      <Home />
      <hr />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Works />
      <hr />
      <Connect />
    </div>
  );
}

export default App;
