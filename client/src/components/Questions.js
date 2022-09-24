import React from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";

const Questions = () => {
  console.log(questionArray);
  return (
    <div>
      Testing
      {questionArray.map((item) => {
        return (
          <Question
            question={item.question}
            options={item.options}
            questionId={item.questionId}
          />
        );
      })}
    </div>
  );
};

export default Questions;
