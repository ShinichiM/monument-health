import React from "react";

const Recommendation = ({ response }) => {
  return (
  <div>
    Recommendation
    {response.map((item) => {
      return (<h3>item</h3>)
    })}
  </div>
  );
};

export default Recommendation;
