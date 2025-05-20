import React, { useState, useEffect } from "react";

const Skills = () => {
  const [htmlWidth, setHtmlWidth] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [jsWidth, setJsWidth] = useState(0);
  const [tailwindWidth, setTailwindWidth] = useState(0);
  const [reactWidth, setReactWidth] = useState(0);
  const [sqlWidth, setSqlWidth] = useState(0);
  const [pythonWidth, setPythonWidth] = useState(0);

  useEffect(() => {
    // Trigger the animation on first load by updating the width after a slight delay
    if (top > 0) {
    }
    setTimeout(() => {
      setHtmlWidth(90);
      setCssWidth(85);
      setJsWidth(90);
      setTailwindWidth(80);
      setReactWidth(70);
      setPythonWidth(30);
      setSqlWidth(85);
    }, 300); // Slight delay for animation trigger
  }, []);

  return (
    <div className="px-24 text-center p-10 bg-gray-400">
      <h1 className="text-4xl mb-12 font-bold">My Skills</h1>

      {/* HTML/CSS Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">HTML/CSS</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-orange-600 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${htmlWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${htmlWidth}%`}</span>
          </div>
        </div>
      </div>

      {/* JavaScript Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">JavaScript</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${cssWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${cssWidth}%`}</span>
          </div>
        </div>
      </div>

      {/* Tailwind Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">Tailwind Css</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${jsWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${jsWidth}%`}</span>
          </div>
        </div>
      </div>

      {/* SQL Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">SQL</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-orange-700 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${sqlWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${sqlWidth}%`}</span>
          </div>
        </div>
      </div>

      {/* React JS Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">React JS</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-cyan-400 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${tailwindWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${tailwindWidth}%`}</span>
          </div>
        </div>
      </div>

      {/* React Js Progress Bar */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">Python</h3>
        <div className="relative w-full h-8 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-teal-400 rounded-full transition-all duration-3000 ease-in-out"
            style={{ width: `${pythonWidth}%` }}
          >
            <span className="absolute w-full text-center text-white font-bold top-0 left-0 flex items-center justify-center h-full">{`${pythonWidth}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
