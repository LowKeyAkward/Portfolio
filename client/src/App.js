import './App.css';
import AboutMe from './Sections/AboutMe';
import ContactMe from './Sections/ContactMe';
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
      <ContactMe />
    </div>
  );
}

export default App;
