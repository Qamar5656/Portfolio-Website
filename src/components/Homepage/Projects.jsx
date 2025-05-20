import React from "react";
import Card from "/src/components/models/Card.jsx";
import image from "/src/assets/images/aboutimg.jpg";

const Projects = ({ img, heading, text }) => {
  return (
    <div className="px-24 bg-gray-500 min-h-screen">
      <div>
        <h2 className="text-center font-bold p-10 text-3xl">Projects</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-3/4">
        <a href="https://gamaeweb.netlify.app" target="_blank">
          <Card
            img={
              "https://api.microlink.io?url=https://gamaeweb.netlify.app&screenshot=true&embed=screenshot.url"
            }
            title="Gaming Website"
            description="This is the text part of the project"
          />
        </a>
        <Card
          img={
            "https://api.microlink.io?url=https://qamarfyp.netlify.app&screenshot=true&embed=screenshot.url"
          }
          title="This is the heading of the card"
          description="This is the text part of the project"
        />
        <Card
          img={img}
          title="This is the heading of the card"
          description="This is the text part of the project"
        />
        <Card
          img={img}
          title="This is the heading of the card"
          description="This is the text part of the project"
        />
      </div>
    </div>
  );
};

export default Projects;
