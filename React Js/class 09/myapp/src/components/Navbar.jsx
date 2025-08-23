import React, { useEffect } from "react";

const Navbar = ({ input }) => {
  useEffect(() => {
    console.log("navbar cmp render");
    console.log("Active");


    // cleanup function
    return () => {
      console.log("InActive");
    };
  }, [input]);

  return (
    <div>
      <h1>NAVBAR</h1>
    </div>
  );
};

export default Navbar;
