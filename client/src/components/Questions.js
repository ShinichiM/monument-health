import React, { useEffect, useState } from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";

const Questions = () => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [response, setResponse] = useState([]);
  const question = questionArray[currentQuestionIndex];

  // Conditional rendering on response of questions based on rqeuiredResponse attribute of question
  if (
    question.requiredResponse &&
    currentQuestionIndex < questionArray.length - 1
  ) {
    const answer = response[question.requiredResponse[0].id - 1].answer;
    const requiredAnswer =
      questionArray[question.requiredResponse[0].id - 1].options[
        question.requiredResponse[0].answer
      ];
    if (answer !== requiredAnswer) {
      setQuestionIndex(currentQuestionIndex + 1);
      setResponse([
        ...response,
        { answer: "n/a", questionKey: currentQuestionIndex },
      ]);
    }
  }

  const handleAnswerResponse = (event) => {
    event.preventDefault();
    // conditional rendering based on last element of question array
    if (currentQuestionIndex === questionArray.length - 1) {
      alert("Finished!");
    } else {
      const questionKey = currentQuestionIndex + 1;
      setQuestionIndex(currentQuestionIndex + 1);
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: questionKey },
      ]);
    }
  };

  return (
    <div>
      <Question
        question={question}
        response={response}
        responseHandler={handleAnswerResponse}
      />
    </div>
  );
};

export default Questions;
