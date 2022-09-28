import React from "react";
import getQuestions from "../utilities/getQuestions";

const Recommendation = ({ response }) => {
  const recommend = response.map((item, index) => {
    return getQuestions[item.questionKey].prompt;
  });
  console.log('recommended: ', recommend);
  return (
  <div>
    Recommendation
    {recommend.map((item) => {
      return (<h3>item</h3>)
    })}
  </div>
  );
};

export default Recommendation;
