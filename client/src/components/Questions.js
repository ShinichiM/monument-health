import React, { useEffect, useState } from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";
import Recommendation from "./Recommendation";
import { Link } from "react-router-dom";

const Questions = ({ response, setResponse }) => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  let question = questionArray[currentQuestionIndex];
  // Conditional rendering on response of questions based on rqeuiredResponse attribute of question
  useEffect(() => {
    localStorage.setItem("response", JSON.stringify(response));
    question = questionArray[currentQuestionIndex];
    if (
      question.requiredResponse !== undefined &&
      currentQuestionIndex < questionArray.length
    ) {
      const answer = response[question.requiredResponse[0].id - 1].answer;
      const requiredAnswer =
        questionArray[question.requiredResponse[0].id - 1].options[
          question.requiredResponse[0].answer
        ];
      if (answer !== requiredAnswer) {
        setResponse([
          ...response,
          { answer: "n/a", questionKey: currentQuestionIndex },
        ]);
        setQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex === questionArray.length - 1) {
          window.location.href = "http://localhost:3000/recommendation";
        }
      }
    }
  }, [currentQuestionIndex, setQuestionIndex, response, setResponse]);

  const handleAnswerResponse = (event) => {
    event.preventDefault();
    // conditional rendering based on last element of question array
    if (currentQuestionIndex === questionArray.length - 1) {
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: currentQuestionIndex },
      ]);
      // setQuestionIndex(currentQuestionIndex + 1);
      window.location.href = "http://localhost:3000/recommendation";
      console.log("finished");
    } else {
      setQuestionIndex(currentQuestionIndex + 1);
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: currentQuestionIndex },
      ]);
    }
  };
  return (
    <div className="bg-[#005E83] min-h-[80%]">
      <Question
        question={question}
        response={response}
        responseHandler={handleAnswerResponse}
      />
    </div>
  );
};

export default Questions;
