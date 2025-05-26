import React from "react";
import ProjectCard from "/src/components/models/ProjectsCard";
import diabeatimage from "/src/assets/images/diabet_ss.png";
import aboutimg from "/src/assets/images/aboutimg.jpg";
import gaming_ss from "/src/assets/images/gaming_ss.png";

const Projects = ({ img, title, description }) => {
  return (
    <div className="px-24 bg-primary min-h-screen text-light py-14">
      <div>
        <h2 className="text-center font-bold p-10 text-3xl">Projects</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-3/4">
        <ProjectCard
          img={gaming_ss}
          title="Gaming Website"
          description="This is the text part of the project"
          deploy_link="https://gamaeweb.netlify.app"
          github_link="https://github.com/Qamar5656/Fortnite-Gaming"
        />
        <ProjectCard
          img={diabeatimage}
          title="Dietry Planner"
          description="This is the text part of the project"
          deploy_link="https://qamarfyp.netlify.app/"
          github_link="https://github.com/Qamar5656https://github.com/Qamar5656/FYP-Project-Diabeat-Using-React-JS"
        />
        <ProjectCard
          img={
            "https://api.microlink.io?url=https://gamaeweb.netlify.app&screenshot=true&embed=screenshot.url"
          }
          title="Gaming Website"
          description="This is the text part of the project"
          deploy_link="https://gamaeweb.netlify.app"
          github_link="https://github.com/Qamar5656/Fortnite-Gaming"
        />
        <ProjectCard
          img={diabeatimage}
          title="Dietry Planner"
          description="This is the text part of the project"
          deploy_link="https://qamarfyp.netlify.app/"
          github_link="https://github.com/Qamar5656/FYP-Project-Diabeat-Using-React-JS"
        />
        <ProjectCard
          img={aboutimg}
          title="This is the heading of the card"
          description="This is the text part of the project"
          deploy_link="https://app.netlify.com/teams/qamar5656/projects"
          github_link="https://github.com/Qamar5656"
        />
        <ProjectCard
          img={aboutimg}
          title="This is the heading of the card"
          description="This is the text part of the project"
          deploy_link="https://app.netlify.com/teams/qamar5656/projects"
          github_link="https://github.com/Qamar5656"
        />
      </div>
    </div>
  );
};

export default Projects;
