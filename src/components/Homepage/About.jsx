import React from "react";
import img from "/src/assets/images/aboutimg.jpg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-6 lg:px-24 min-h-screen w-full flex flex-col bg-primary lg:flex-row justify-between items-center pt-24 lg:pt-10 gap-10">
      {/* Text Section */}
      <div className="w-full lg:w-3/4 space-y-5 font-medium text-lg text-light">
        <h1 className="text-4xl font-bold text-center lg:text-left">
          About Me
        </h1>

        <p className="text-justify lg:text-left">
          My name is <strong>Qamar Abbas</strong>, and I'm from Lahore,
          Pakistan. I hold a Bachelor's degree in Computer Science from Lahore
          Garrison University, with a CGPA of 3.20 out of 4.00.
        </p>

        <p className="text-justify lg:text-left">
          I'm a passionate web developer and designer with 6 months of practical
          experience. My strengths lie in front-end development and working with
          databases, and I am currently expanding into back-end technologies.
        </p>

        <p className="text-justify lg:text-left">
          I'm proficient in modern web technologies and currently seeking
          full-time roles and freelance project opportunities.
        </p>

        <p className="text-justify lg:text-left">Feel free to reach out:</p>

        <div className="flex flex-col gap-4 lg:gap-2">
          <a
            href="tel:+923091488445"
            className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp size={24} className="text-[#25D366]" /> +92 309 1488445
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=qamar4157@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
          >
            <FaEnvelope size={24} className="text-blue-700" />{" "}
            qamar4157@gmail.com
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-3/4">
        <img
          src={img}
          alt="Qamar Abbas"
          className="rounded-lg w-full object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
