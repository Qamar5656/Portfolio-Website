import React from "react";
import img from "/src/assets/images/aboutimg.jpg";

const About = () => {
  return (
    <>
      <div className="px-24 min-h-screen w-full flex flex-col bg-gray-500 lg:flex-row justify-between items-center pt-24 lg:pt-10 gap-5">
        <div className="w-full lg:w-3/4 space-y-4 font-semibold text-lg text-gray-200">
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            About Me
          </h1>
          <p className="text-justify lg:text-start">
            I am Qamar Abbas. I am from Lahore, Pakistan. I have done Bs
            Computer Science from Lahore Garrison University with 3.20 Cgpa out
            of 4.00 .
          </p>
          <p className="text-justify lg:text-start">
            I am a skilled web developer and web designer, having 6 months of
            hands-on experience. I have expertise in front-end development and
            databases. Now I am working in backend-development.
          </p>
          <p className="text-justify lg:text-start">
            I have experience with the usage of the latest technologies like
            React JS and Node js with SQL database.
          </p>
        </div>
        <div className="w-full lg:w-3/4 lg:h-74">
          <img src={img} alt="Loading Image" className="rounded-lg " />
        </div>
      </div>
    </>
  );
};

export default About;
