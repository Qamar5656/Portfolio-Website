import React, { useEffect } from "react";
import Navbar from "./components/Homepage/Navbar";
import Body from "./components/Homepage/Body";
import About from "./components/Homepage/About";
import Skills from "./components/Homepage/Skills";
import Resume from "./components/Homepage/Resume";
import Projects from "./components/Homepage/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app.css";
import ContactForm from "./components/forms/ContactForm";
import { BrowserRouter, Routes } from "react-router-dom";
import ScrollProgressBar from "./components/models/ScrollProgressBar";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Customize duration if needed
  }, []);
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <div id="body">
        <Body />
      </div>
      <div id="about" data-aos="zoom-out">
        <About />
      </div>
      <div id="skills" data-aos="fade-out">
        <Skills />
      </div>
      <div id="resume" data-aos="zoom-out">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
};

export default App;
