import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div>
      <div className="w-full p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-white text-black">
        <div className="flex flex-col gap-2">
          <img src={img} alt="image" />
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
