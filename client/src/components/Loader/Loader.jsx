import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-3xl font-bold animate-pulse text-red-700">
        Loading...
      </h2>
    </div>
  );
};

export default Loader;
