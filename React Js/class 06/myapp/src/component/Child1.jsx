import React from "react";

const Child1 = ({ userName, getChildData }) => {
  console.log("child render", userName, getChildData);

  const childData = "child data";

  return (
    <div>
      <h1>CHild Cmp {userName} </h1>

      <button onClick={() => getChildData(childData)}>CHILD BTN</button>
    </div>
  );
};

export default Child1;
