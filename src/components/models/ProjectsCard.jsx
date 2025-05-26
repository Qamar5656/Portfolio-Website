import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({ img, title, description, github_link, deploy_link }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-primary text-light border-2 border-yellow-400 pb-4">
        <img
          src={img}
          alt="image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex flex-col px-4 py-3 gap-2 flex-grow">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="flex-grow">{description}</p>
          <div className="flex items-center gap-5 mt-auto">
            <a href={github_link} target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
            <a
              href={deploy_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
