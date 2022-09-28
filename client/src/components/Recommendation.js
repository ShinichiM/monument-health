import React from "react";
import questionArray from "../utilities/getQuestions";

const Recommendation = () => {
  const answers = JSON.parse(localStorage.getItem("response"));
  const recommend = answers.map((item, index) => {
    return `Prompt: ${questionArray[item.questionKey].prompt}, Answer: ${item.answer} `;
  });

  console.log('recommendation array: ', recommend);
  return (
    <div>
      Recommendation
      {recommend.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
};

export default Recommendation;
