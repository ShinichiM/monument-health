import React from "react";
import questionArray from "../utilities/getQuestions";

const Recommendation = () => {
  const answers = JSON.parse(localStorage.getItem("response"));
  const recommend = answers.map((item, index) => {
    console.log(
      `Prompt: ${questionArray[item.questionKey].prompt}, Answer: ${
        item.answer
      } `
    );
    return questionArray[item.questionKey].recommendation !== undefined
      ? questionArray[item.questionKey].recommendation
      : "";
  });
  let str = "";
  recommend.forEach((recommendation) => {
    if (recommendation !== "") {
      str = str + recommendation + ". ";
    }
  });

  // <div>
  //   Recommendation
  //   {recommend.map((item) => {
  //     return <h3>{item}</h3>;
  //   })}
  // </div>;
  console.log("recommendation array: ", recommend);
  return (
      <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="mx-auto max-w-4xl rounded-3xl p-20 text-center shadow-xl border backdrop-blur">
          <h2 className="text-5xl font-bold leading-tight text-black"></h2>
          <div className="mt-6 flex items-center justify-start gap-4">
            {str}
          </div>
        </div>
      </div>
  );
};

export default Recommendation;
