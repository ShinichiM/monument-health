import React from "react";

const Question = ({ question, response, responseHandler }) => {
  //   console.log("--- resposne from question component - ", response);

  // quesitons render before hitting logic so the next question id will be returned
  // questions also start at index 1 so need to index by response array by [question.id-2]
  // bg-[#092540] for card background
  // console.log(question);
  return (
    <section className="min-h-full overflow-y-hidden">
      <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="mx-auto max-w-4xl rounded-3xl p-20 text-center shadow-xl border backdrop-blur">
          <h2 className="text-5xl font-bold leading-tight text-black">
            {question.prompt}
          </h2>
          <div className="mt-6 flex items-center justify-start gap-4">
            {question.options.map((option, index) => {
              return (
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-[#B9573E] hover:bg-[#E8Af40] px-5 py-2 text-lg font-medium text-white"
                  onClick={responseHandler}
                  key={`${question.id}-option-${index}`}
                >
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
