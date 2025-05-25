import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import ContactForm from "/src/components/forms/ContactForm.jsx";
import { BrowserRouter, Routes } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [formvisible, setFormVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);

  const handleBars = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const handleFormDisplay = () => setFormVisible(!formvisible);
  const closeFormDisplay = () => setFormVisible(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = ["home", "about", "skills", "projects", "resume"];

  function handleListItem() {
    setIndex((prev) => prev + 1);
  }

  return (
    <>
      <div
        className={`fixed w-full p-5 z-10 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="flex flex-row justify-around">
          <div className="flex items-center justify-center">
            <ScrollLink
              to="body"
              spy={true}
              smooth={true}
              className="font-bold text-2xl text-white cursor-pointer"
            >
              Qamar
            </ScrollLink>
          </div>

          {/* Navbar Links */}
          <ul className="hidden lg:flex items-center justify-center lg:flex-row gap-20 mt-2 font-bold">
            {NavItems.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                activeClass="text-highlight shadow-highlight border-none rounded-full transition duration-300"
                className="nav-link"
                onClick={handleListItem}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </ul>

          <div>
            <button
              onClick={handleFormDisplay}
              className="btn-primary hidden lg:flex"
            >
              Contact Us
            </button>
          </div>

          {/* Handle Bars */}
          <div className="lg:hidden cursor-pointer text-white font-bold flex items-center">
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
            } lg:hidden z-10 flex flex-col absolute bg-primary-gradient shadow-lg border-b border-gray-600 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            {NavItems.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                className="hover:text-highlight"
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>

      {formvisible && <ContactForm onClose={closeFormDisplay} />}

      {/* Routing Methods to switch between pages  */}
      {/* <BrowserRouter>
      <Routes>
      </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default Navbar;
