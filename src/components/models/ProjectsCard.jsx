import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({ img, title, description, github_link, deploy_link }) => {
  function handleClick(e) {
    e.stopPropogate();
  }
  return (
    <div>
      <div className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-primary text-light border-2 border-yellow-400 pb-8 ">
        <div className="flex flex-col gap-2">
          <img src={img} alt="image" />
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          <a href={github_link} target="_blank" onClick={handleClick}></a>
          <a href={deploy_link} target="_blank" onClick={handleClick}></a>
          <div>
            <span>
              <FaGithub />
            </span>
            <span>
              <i className="fas fa-globe text-green-500"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
