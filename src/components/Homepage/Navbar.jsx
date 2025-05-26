import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactForm from "/src/components/forms/ContactForm.jsx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [formvisible, setFormVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      scroller.scrollTo("home", {
        duration: 600,
        smooth: true,
        offset: -80,
      });
    } else {
      // Navigate to homepage, then scroll after delay
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("home", {
          duration: 600,
          smooth: true,
          offset: -80,
        });
      }, 100); // delay to allow route change to complete
    }
  };

  return (
    <>
      <div
        className={`fixed w-full p-5 z-10 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="flex flex-row justify-around">
          <div className="flex items-center justify-center">
            <span
              className="font-bold text-2xl text-highlight cursor-pointer"
              onClick={handleHomeClick}
            >
              Qamar
            </span>
          </div>

          {/* Navbar Links */}
          <ul className="hidden lg:flex items-center justify-center lg:flex-row gap-20 mt-2 font-bold">
            {NavItems.map((section, index) => {
              const label = section.charAt(0).toUpperCase() + section.slice(1);

              if (section === "resume") {
                return (
                  <Link
                    key={index}
                    to="/Resume"
                    className="nav-link text-light hover:text-highlight"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                );
              }

              return location.pathname === "/" ? (
                <ScrollLink
                  key={index}
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  activeClass="text-highlight shadow-highlight border-none rounded-full transition duration-300"
                  className="nav-link"
                  onClick={handleListItem}
                >
                  {label}
                </ScrollLink>
              ) : (
                <Link
                  key={index}
                  to="/"
                  className="nav-link text-light"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      scroller.scrollTo(section, {
                        duration: 600,
                        smooth: true,
                        offset: -80,
                      });
                    }, 100);
                  }}
                >
                  {label}
                </Link>
              );
            })}
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
          <div className="lg:hidden cursor-pointer text-light font-bold flex items-center">
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
            } lg:hidden z-10 flex flex-col absolute bg-primary shadow-lg border-b text-light left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            {NavItems.map((section, index) => {
              const label = section.charAt(0).toUpperCase() + section.slice(1);

              if (section === "resume") {
                return (
                  <Link
                    key={index}
                    to="/Resume"
                    className="nav-link text-light hover:text-highlight"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                );
              }

              return location.pathname === "/" ? (
                <ScrollLink
                  key={index}
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  activeClass="text-highlight shadow-highlight border-none rounded-full transition duration-300"
                  className="nav-link"
                  onClick={() => {
                    handleListItem();
                    closeMenu();
                  }}
                >
                  {label}
                </ScrollLink>
              ) : (
                <Link
                  key={index}
                  to="/"
                  className="nav-link text-ligth"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      scroller.scrollTo(section, {
                        duration: 600,
                        smooth: true,
                        offset: -80,
                      });
                    }, 100);
                    closeMenu();
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {formvisible && <ContactForm onClose={closeFormDisplay} />}
    </>
  );
};

export default Navbar;
