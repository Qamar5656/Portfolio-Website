import React from "react";

const SkillsCard = ({ icon, label, className }) => {
  return (
    <div className="bg-primary border border-yellow-400 shadow-lg rounded-lg p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <p className="text-light text-3xl mb-2">{icon}</p>
        <p className={`text-secondary font-semibold ${className}`}>{label}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
