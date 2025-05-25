import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-primary p-8 flex flex-col items-center overflow-y-auto">
      <h2 className="text-3xl text-light font-bold mb-6">My Resume</h2>

      {/* PDF Display */}
      <iframe
        src="/Qamar_A_S.pdf"
        title="Resume"
        width="80%"
        height="600px"
        className="border shadow-md"
      ></iframe>
    </div>
  );
};

export default Resume;
