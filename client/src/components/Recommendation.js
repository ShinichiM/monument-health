import React from "react";

const Recommendation = ({ response }) => {
  const answers = JSON.parse(localStorage.getItem("response"));
  console.log(answers);
  console.log(typeof answers)
  return (
    <div>
      Recommendation
      {answers.map((item) => {
        return <h3>{item.answer}</h3>;
      })}
    </div>
  );
};

export default Recommendation;
