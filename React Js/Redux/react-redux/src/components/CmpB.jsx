import React from "react";
import CmpC from "./CmpC";

const CmpB = ({ userName }) => {
  console.log("CmpB");
  return (
    <div>
      <h1>CmpB </h1>
      <CmpC userName={userName} />
    </div>
  );
};

export default CmpB;
