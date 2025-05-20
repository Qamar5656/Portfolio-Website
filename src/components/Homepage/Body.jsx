import React, { useState, useEffect } from "react";
// import img from "/src/assets/images/img3.jpg";
import img from "/src/assets/images/bgcover.jpg";
// import bgimg from "../assets/images/bgcover.jpg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

const Body = () => {
  const tech = ["web developer", "web designer", "youtuber", "ui/ux designer"];
  const images = [
    "https://images.unsplash.com/photo-1615494937408-7f4e41bf45d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMGJnJTIwaW1hZ2UlMjBmb3IlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1673696508153-01cf0dbcf60a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyJTIwd29ya2luZyUyMCUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    // "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://samaritan-technologies.com/static/assets/images/Top-Background.webp",
  ];

  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevCount) => (prevCount + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  //use effect for roles array
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % tech.length); // Loop back to 0
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId); // Clean up
  }, [tech.length]);

  return (
    // <div
    // className={`min-h-screen pt-14 w-full bg-${[images[index]]} bg-[url('https://samaritan-technologies.com/static/assets/images/Top-Background.webp')]  bg-cover flex justify-center items-center`}>
    <div
      className="min-h-screen pt-14 w-full bg-black bg-opacity-50 bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="lg:flex items-center gap-80 px-4 ">
        {/* Text Section */}
        <div className=" text-white flex flex-col justify-start gap-4 text-center lg:text-left md:mt-9 lg:mt-0">
          <h1 className="text-4xl">Hello, It's me</h1>
          <h1 className="text-yellow-400 text-5xl my-2 font-bold">
            Qamar Abbas
          </h1>
          <h1 className="text-3xl">
            I am a{" "}
            <span className=" text-green-400  my-2 transition-transform duration-500 ease-in-out">
              {tech[count]}
            </span>
          </h1>
          <div className="flex gap-6 hover:col-auto cursor-pointer mt-2">
            <a
              href="https://www.linkedin.com/in/qamar-abbas5656"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={38}
                className="text-white hover:text-blue-700 cursor-pointer transition-colors duration-300"
              />
            </a>
            <a href="https://github.com/Qamar5656" target="_blank">
              <AiFillGithub
                href=""
                size={38}
                className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/qamar-abbas5656"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                size={38}
                className="text-white hover:text-pink-500 cursor-pointer transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/qamar-abbas5656"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook
                href=""
                size={38}
                className="text-white hover:text-blue-600 cursor-pointer transition-colors duration-300"
              />
            </a>
          </div>
          <div className="py-3">
            <a
              className="border-2 bg-gray-700 hover:bg-gray-400 hover:text-black text-white font-bold text-xl rounded-xl p-2 my-2"
              href="/Qamar_A_S_E.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        {/* <img
          src={images[index]}
          alt="Profile"
          className="rounded-xl h-64 w-80  sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          // className="z-0 rounded-full border-4  border-y-green-400 border-x-yellow-400 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        /> */}
      </div>
    </div>
  );
};

export default Body;
