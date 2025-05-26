import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import Body from "./components/Homepage/Body";
import About from "./components/Homepage/About";
import Skills from "./components/Homepage/Skills";
import Projects from "./components/Homepage/Projects";
import Footer from "./components/Homepage/Footer";
import Resume from "./components/Homepage/Resume";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ScrollProgressBar from "./components/models/ScrollProgressBar";
import Loader from "./components/models/Loader"; // 👈 import your loader

const HomePage = () => (
  <>
    <ScrollProgressBar />
    <div id="home">
      <Body />
    </div>
    <div id="about" data-aos="zoom-out">
      <About />
    </div>
    <div id="skills" data-aos="fade-out">
      <Skills />
    </div>
    <div id="projects" data-aos="zoom-in">
      <Projects />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Simulate a delay (e.g., waiting for assets or fonts)
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // 👈 render the loader while loading

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
