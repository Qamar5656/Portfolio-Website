import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/qamar-abbas5656",
    icon: <AiFillLinkedin />,
    label: "LinkedIn",
    hoverClass: "hover:text-blue-700",
  },
  {
    href: "https://github.com/Qamar5656",
    icon: <AiFillGithub />,
    label: "GitHub",
    hoverClass: "hover:text-gray-400",
  },
  {
    href: "https://www.instagram.com",
    icon: <AiFillInstagram />,
    label: "Instagram",
    hoverClass: "hover:text-pink-500",
  },
  {
    href: "https://www.facebook.com",
    icon: <AiFillFacebook />,
    label: "Facebook",
    hoverClass: "hover:text-blue-600",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 gap-4">
      <p className="text-center lg:text-left">
        Designed and Developed by Qamar Abbas
      </p>

      <p className="flex items-center gap-1 text-center lg:text-left">
        <FaRegCopyright /> {new Date().getFullYear()} Qamar. All rights
        reserved.
      </p>

      <div className="flex gap-6 cursor-pointer justify-center items-center">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`text-xl transition-colors duration-300 ${item.hoverClass}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
