import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiVuejsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import SkillsCard from "../models/SkillsCard";

const skillsData = [
  { icon: <FaReact size={44} color="#61DAFB" />, label: "React Js/Ts" },
  { icon: <RiVuejsFill size={44} color="#42B883" />, label: "Vue Js" },
  { icon: <SiNodedotjs size={44} color="#339933" />, label: "Node Js" },
  { icon: <FaHtml5 size={44} color="orange" />, label: "HTML5" },
  { icon: <FaCss3Alt size={44} color="blue" />, label: "CSS3" },
  { icon: <IoLogoJavascript size={44} color="gold" />, label: "JavaScript" },
  { icon: <FaPython size={44} color="blue" />, label: "Python" },
  { icon: <SiMysql size={44} color="#00758F" />, label: "MySQL" },
  { icon: <FaGitSquare size={44} color="#F1502F" />, label: "Git" },
  { icon: <FaGithub size={44} color="black" />, label: "GitHub" },
  {
    icon: <RiTailwindCssFill size={44} color="#38B2AC" />,
    label: "Tailwind CSS",
  },
  { icon: <FaBootstrap size={44} color="purple" />, label: "Bootstrap" },
];

const Skills = () => {
  return (
    <div className="px-6 md:px-24 py-10 bg-primary text-center">
      <h1 className="text-4xl mb-12 font-bold text-light">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <SkillsCard
            key={index}
            icon={skill.icon}
            label={skill.label}
            className="text-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
