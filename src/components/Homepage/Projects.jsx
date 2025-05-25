import React from "react";
import ProjectCard from "/src/components/models/ProjectsCard";

const Projects = ({ img, title, description }) => {
  return (
    <div className="px-24 bg-primary min-h-screen text-light py-14">
      <div>
        <h2 className="text-center font-bold p-10 text-3xl">Projects</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-3/4">
        <ProjectCard
          img={
            "https://api.microlink.io?url=https://gamaeweb.netlify.app&screenshot=true&embed=screenshot.url"
          }
          title="Gaming Website"
          description="This is the text part of the project"
          deploy_link="https://gamaeweb.netlify.app"
          github_link="https://github.com/Qamar5656/Fortnite-Gaming"
        />
        <a href="https://qamarfyp.netlify.app/" target="_blank">
          <ProjectCard
            img={
              "https://api.microlink.io?url=https://qamarfyp.netlify.app/&screenshot=true&embed=screenshot.url"
            }
            title="Dietry Planner"
            description="This is the text part of the project"
          />
        </a>
        <ProjectCard
          img={img}
          title="This is the heading of the card"
          description="This is the text part of the project"
        />
        <ProjectCard
          img={img}
          title="This is the heading of the card"
          description="This is the text part of the project"
        />
      </div>
    </div>
  );
};

export default Projects;
