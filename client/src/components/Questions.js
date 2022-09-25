import React, { useEffect, useState } from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState([]);
  const question = questionArray[currentQuestion];

  const handleAnswerResponse = (event) => {
    event.preventDefault();

    // Conditional rendering on response of questions based on rqeuiredResponse attribute of question
    if (question.requiredResponse) {
      const answer = response[question.requiredResponse[0].id - 1].answer;
      const requiredAnswer =
        questionArray[question.requiredResponse[0].id - 1].options[
          question.requiredResponse[0].answer
        ];
      if (answer !== requiredAnswer) {
        setCurrentQuestion(currentQuestion + 1);
        console.log(currentQuestion, " - - conditional rqeuiredAnswer ");
        setResponse([
          ...response,
          { answer: "n/a", questionKey: currentQuestion },
        ]);
      }
    }

    // conditional rendering based on last element of question array
    if (currentQuestion === questionArray.length - 1) {
      alert("Finished!");
    } else {
      const questionKey = currentQuestion + 1;
      setCurrentQuestion(currentQuestion + 1);
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: questionKey },
      ]);
    }
  };

  return (
    <div>
      Testing
      <Question
        question={question}
        response={response}
        responseHandler={handleAnswerResponse}
      />
    </div>
  );
};

export default Questions;
