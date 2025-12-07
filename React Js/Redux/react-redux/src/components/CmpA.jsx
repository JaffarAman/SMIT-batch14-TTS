import React from "react";
import CmpB from "./CmpB";

const CmpA = ({userName}) => {
  console.log("CmpA");

  return (
    <div>
      <h1>CMP A</h1>
      <CmpB userName={userName} />
    </div>
  );
};

export default CmpA;
