import React from "react";

const Question = ({ question, options, questionId }) => {
  return (
    <div>
      <div>{question}</div>
      <div>{options}</div>
      <div>{questionId}</div>
    </div>
  );
};

export default Question;
