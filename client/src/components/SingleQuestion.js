import React from "react";

const Question = ({ question, response, responseHandler }) => {
  //   console.log("--- resposne from question component - ", response);

  // quesitons render before hitting logic so the next question id will be returned
  // questions also start at index 1 so need to index by response array by [question.id-2]

  console.log(response);
  return (
    <div>
      <div>{question.prompt}</div>
      {question.options.map((option, index) => {
        return (
          <button
            key={`${question.id}-option-${index}`}
            onClick={responseHandler}
          >
            {option}
          </button>
        );
      })}
      <div>{question.id}</div>
    </div>
  );
};

export default Question;
