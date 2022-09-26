import React from "react";

const Question = ({ question, response, responseHandler }) => {
  //   console.log("--- resposne from question component - ", response);

  // quesitons render before hitting logic so the next question id will be returned
  // questions also start at index 1 so need to index by response array by [question.id-2]

  return (
    <section className="flex justify-center h-max">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#092540] p-20 text-center">
          <h2 className="text-5xl font-bold leading-tight text-white">
            {question.prompt}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            {question.options.map((option, index) => {
              return (<button
                className="flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-lg font-medium text-white"
                onClick={responseHandler}
                key={`${question.id}-option-${index}`}
              >
                <span>{option}</span>
              </button>);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
