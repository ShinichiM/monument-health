import React, { useState } from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";

const Questions = () => {
  console.log(questionArray);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState([]);

  const handleAnswerResponse = (event) => {
    event.preventDefault();
    if (currentQuestion === questionArray.length - 1) {
      alert("Finished!");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
    console.log(currentQuestion);
  };
  const question = questionArray[currentQuestion].question;
  const options = questionArray[currentQuestion].options;
  const questionId = questionArray[currentQuestion].id;
  return (
    <div>
      Testing
      <Question
        question={question}
        options={options}
        questionId={questionId}
        responseHandler={handleAnswerResponse}
      />
    </div>
  );
};

export default Questions;
