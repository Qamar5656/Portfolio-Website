import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400"></div>
    </div>
  );
};

export default Loader;
