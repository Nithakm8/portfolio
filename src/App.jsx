import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      {/* <Contact />   */}
    </div>
  );
}
