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
          description="I created a real-world gaming website called Fortnite Gaming using modern technologies like Vue.js and Tailwind CSS.
The project demonstrates concepts such as API integration, routing, responsiveness, image galleries, and much more. "
          deploy_link="https://gamaeweb.netlify.app"
          github_link="https://github.com/Qamar5656/Fortnite-Gaming"
        />
        <ProjectCard
          img={diabeatimage}
          title="Dietry Planner"
          description="Diabeat is designed to help you maintain balanced blood sugar levels by offering personalized dietary recommendations. With our easy-to-use Glycemic Load Calculator, you can make informed meal choices that align with your health goals. Through this you can easily check which food items you eat at specific blood sugar level by entering your blood sugar level as well as get weekly dietry plan."
          deploy_link="https://qamarfyp.netlify.app/"
          github_link="https://github.com/Qamar5656https://github.com/Qamar5656/FYP-Project-Diabeat-Using-React-JS"
        />
        <ProjectCard
          img={
            "https://api.microlink.io?url=https://gamaeweb.netlify.app&screenshot=true&embed=screenshot.url"
          }
          title="Gaming Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam culpa! Hic, provident. Fugit excepturi veritatis nobis ut velit, consequatur laborum? Accusantium ducimus ullam eligendi voluptatem incidunt suscipit voluptatibus. Doloribus."
          deploy_link="https://gamaeweb.netlify.app"
          github_link="https://github.com/Qamar5656/Fortnite-Gaming"
        />
        <ProjectCard
          img={diabeatimage}
          title="Dietry Planner"
          description="Lorem ipsum dolor sit This is the test data amet consectetur adipisicing elit. Aliquam, ipsam culpa! Hic, provident. Fugit excepturi veritatis nobis ut velit, consequatur laborum? Accusantium ducimus ullam eligendi voluptatem incidunt suscipit voluptatibus. Doloribus."
          deploy_link="https://qamarfyp.netlify.app/"
          github_link="https://github.com/Qamar5656/FYP-Project-Diabeat-Using-React-JS"
        />
        <ProjectCard
          img={aboutimg}
          title="Accesories Webpage"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam culpa! Hic, provident. Fugit excepturi veritatis nobis ut velit, consequatur laborum? Accusantium ducimus ullam eligendi voluptatem incidunt suscipit voluptatibus. Doloribus."
          deploy_link="https://app.netlify.com/teams/qamar5656/projects"
          github_link="https://github.com/Qamar5656"
        />
        <ProjectCard
          img={aboutimg}
          title="Accesories Webpage"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam culpa! Hic, provident. Fugit excepturi veritatis nobis ut velit, consequatur laborum? Accusantium ducimus ullam eligendi voluptatem incidunt suscipit voluptatibus. Doloribus."
          deploy_link="https://app.netlify.com/teams/qamar5656/projects"
          github_link="https://github.com/Qamar5656"
        />
      </div>
    </div>
  );
};

export default Projects;
