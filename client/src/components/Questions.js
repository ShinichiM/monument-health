import React, { useEffect, useState } from "react";
import questionArray from "../utilities/getQuestions";
import Question from "./SingleQuestion";
import Recommendation from "./Recommendation";
import { Link } from "react-router-dom";

const Questions = ({ response, setResponse }) => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  // const [response, setResponse] = useState([]);
  const question = questionArray[currentQuestionIndex];
  // Conditional rendering on response of questions based on rqeuiredResponse attribute of question
  useEffect(() => {
    localStorage.setItem("response", JSON.stringify(response));
    if (
      question.requiredResponse &&
      currentQuestionIndex < questionArray.length
    ) {
      const answer = response[question.requiredResponse[0].id - 1].answer;
      const requiredAnswer =
        questionArray[question.requiredResponse[0].id - 1].options[
          question.requiredResponse[0].answer
        ];
      console.log(answer, " - - required: ", requiredAnswer);
      if (answer !== requiredAnswer) {
        setQuestionIndex(currentQuestionIndex + 1);
        setResponse([
          ...response,
          { answer: "n/a", questionKey: currentQuestionIndex },
        ]);
      }
    }
  }, [question.requiredResponse, currentQuestionIndex, response]);

  const handleLastQuestionResponse = (event) => {
    const selection = event.target.textContent;
  };

  const handleAnswerResponse = (event) => {
    event.preventDefault();
    const questionKey = currentQuestionIndex + 1;

    // conditional rendering based on last element of question array
    if (currentQuestionIndex === questionArray.length - 1) {
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: questionKey },
      ]);
      window.location.href = "http://localhost:3000/recommendation";
      console.log("finished");
    } else {
      setQuestionIndex(currentQuestionIndex + 1);
      setResponse([
        ...response,
        { answer: event.target.textContent, questionKey: questionKey },
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
