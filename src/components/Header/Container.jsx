import React from "react";

const Container = ({ children }) => {
  return (
    // xl:px-20
    // md:px-10
    // sm:px-2
    <div
      className="
        max-w-[2520px]
        mx-auto
        px-8
        
      "
    >
      {children}
    </div>
  );
};

export default Container;