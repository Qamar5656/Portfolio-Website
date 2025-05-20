import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import ContactForm from "/src/components/forms/ContactForm.jsx";

const Navbar = () => {
  const [menu, setMenu] = useState(false); // Corrected state initialization to boolean
  const [formvisible, setFormVisible] = useState(false);

  // to display bars on small screens
  const handleBars = () => {
    setMenu(!menu);
  };

  // to close navigatin  on small screens
  const closeMenu = () => {
    setMenu(false);
  };

  // to display contact form with toggle display
  function handleFormDisplay() {
    setFormVisible(!formvisible);
  }

  const closeFormDisplay = () => {
    setFormVisible(false);
  };

  return (
    <>
      <div
        className="fixed w-full p-5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
      shadow-lg border-b border-gray-600 z-10"
      >
        <div className="flex flex-row justify-around">
          <div className="flex items-center justify-center">
            <ScrollLink
              to="body"
              spy={true}
              smooth={true}
              className="font-bold  text-2xl text-white cursor-pointer"
            >
              Qamar
            </ScrollLink>
          </div>
          {/* Navbar Links */}
          <ul className="hidden lg:flex items-center justify-center lg:flex-row gap-20 mt-2 font-bold">
            <ScrollLink
              to="body"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-yellow-300"
              className="cursor-pointer text-white hover:text-yellow-300 hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] border-none rounded-full transition duration-300 px-2"
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-yellow-400"
              className="cursor-pointer text-white hover:text-yellow-300 hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] border-none rounded-full transition duration-300 px-2"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-yellow-400"
              className="cursor-pointer text-white hover:text-yellow-300 hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] border-none rounded-full transition duration-300 px-2"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-yellow-400"
              className="cursor-pointer text-white hover:text-yellow-300 hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] border-none rounded-full transition duration-300 px-2"
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-yellow-400"
              className="cursor-pointer text-white hover:text-yellow-300 hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] border-none rounded-full transition duration-300 px-2"
            >
              Projects
            </ScrollLink>
          </ul>
          <div>
            <button
              onClick={handleFormDisplay}
              className="border-2 bg-green-600 text-white hover:bg-green-500 font-bold rounded-md  px-4 py-1 hidden lg:flex"
            >
              Contact Us
            </button>
          </div>

          {/* Handle Bars */}
          <div className="lg:hidden cursor-pointer text-white  font-bold flex items-center">
            {menu ? (
              <AiOutlineClose size={34} onClick={handleBars} />
            ) : (
              <AiOutlineMenu size={34} onClick={handleBars} />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-10 flex flex-col absolute bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
      shadow-lg border-b border-gray-600 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <ScrollLink
              to="/home"
              className="hover:text-yellow-300"
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="/about"
              className="hover:text-yellow-300"
              onClick={closeMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="/skills"
              className="hover:text-yellow-300"
              onClick={closeMenu}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="/resume"
              className="hover:text-yellow-300"
              onClick={closeMenu}
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="/projects"
              className="hover:text-yellow-300"
              onClick={closeMenu}
            >
              Projects
            </ScrollLink>
          </div>
        </div>
      </div>

      {formvisible && <ContactForm onClose={closeFormDisplay} />}
      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </>
  );
};

export default Navbar;
