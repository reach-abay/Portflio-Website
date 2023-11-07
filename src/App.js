import "./App.css";
import Intro from "./sections/Intro.js";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contact";
import { createContext } from "react";
import { useState } from "react";
export const deviceContext = createContext();

function App() {
  const [deviceName, setDeviceName] = useState("PC");
  function findDevice() {
    if (navigator.userAgent.includes("Android")) {
      setDeviceName("Mobile");
    }
  }
  return (
    <deviceContext.Provider value={deviceName}>
      <div className="App" onLoad={findDevice}>
        <Intro></Intro>
        <Education></Education>
        <Certificates></Certificates>
        <Projects></Projects>
        <Contacts></Contacts>
      </div>
    </deviceContext.Provider>
  );
}

export default App;
/*      <Parallax></Parallax>
 */
