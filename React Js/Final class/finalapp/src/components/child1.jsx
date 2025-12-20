import React, { memo } from "react";

const Child1 = ({ name }) => {
  console.log("chlld 1 render");
  return (
    <div>
      <h1>Child1 : {name}</h1>
    </div>
  );
};

export default memo(Child1);
