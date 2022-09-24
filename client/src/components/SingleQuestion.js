import React from "react";

const Question = ({ question, options, questionId, responseHandler }) => {
  return (
    <div>
      <div>{question}</div>
      {options.map((option, index) => {
        return <button key={`${questionId}-option-${index}`} onClick={responseHandler}>{option}</button>
      })}
      <div>{questionId}</div>
    </div>
  );
};

export default Question;
