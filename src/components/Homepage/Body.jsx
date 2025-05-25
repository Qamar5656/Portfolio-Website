import React, { useState, useEffect } from "react";
import img from "/src/assets/images/bgimg.webp";
import img2 from "/src/assets/images/gif_for_body.gif";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

const Body = () => {
  const tech = ["web developer", "web designer", "youtuber", "ui/ux designer"];
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/qamar-abbas5656",
      icon: <AiFillLinkedin />,
      label: "LinkedIn",
      hoverClass: "hover:text-[#0A66C2]",
    },
    {
      href: "https://github.com/Qamar5656",
      icon: <AiFillGithub />,
      label: "GitHub",
      hoverClass: "hover:text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/qamar-abbas5656",
      icon: <AiFillInstagram />,
      label: "Instagram",
      hoverClass: "hover:text-[#E1306C]",
    },
    {
      href: "https://www.linkedin.com/in/qamar-abbas5656",
      icon: <AiFillFacebook />,
      label: "Facebook",
      hoverClass: "hover:text-[#1877F2]",
    },
  ];

  const images = [img];

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
    }, 3000); // Change every 4 seconds

    return () => clearInterval(intervalId); // Clean up
  }, [tech.length]);

  return (
    <div
      className="min-h-screen pt-14 w-full bg-black bg-opacity-70 bg-cover flex justify-between gap-9 items-center overflow-x-hidden px-32"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="flex flex-col md:flex-row w-full items-center px-4 gap-24 justify-between py-6">
        {/* Text Section */}
        <div className=" text-white flex flex-col justify-start gap-4 text-center lg:text-left md:mt-9 lg:mt-0">
          <h1 className="text-4xl">Hello, It's me</h1>
          <h1 className="text-yellow-400 text-5xl my-2 font-bold">
            Qamar Abbas
          </h1>
          <h1 className="text-3xl">
            I am a{" "}
            <span className=" text-yellow-400 font-bold  my-2 transition-transform duration-500 ease-in-out">
              {tech[count]}
            </span>
          </h1>

          <div className="flex gap-6 cursor-pointer mt-3 justify-center lg:justify-start">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`text-white text-[38px] transition-colors duration-300 ${item.hoverClass}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          {/* Profile Image */}
          <img
            src={img2}
            alt="Profile"
            className="rounded-xl h-64 w-80  sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
