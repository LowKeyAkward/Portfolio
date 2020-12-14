import './App.css';
import AboutMe from './Sections/AboutMe';
import Intro from './Sections/Intro';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
