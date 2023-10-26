import './App.css';
import Intro from "./sections/Intro.js";
import Certificates from "./sections/Certificates";
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contacts from './sections/Contact'

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Education></Education>
      <Certificates></Certificates>
      <Projects></Projects>
      <Contacts></Contacts>
      
    </div>
  );
}

export default App;
/*      <Parallax></Parallax>
 */