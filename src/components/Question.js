import { useEffect, useState } from "react";

const Question = ({
  question,
  index,
  total,
  onNext,
  isLast
}) => {
  const [timeLeft, setTimeLeft] = useState(question.timeLimit);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // TIMER
  useEffect(() => {
    if (timeLeft === 0) {
      onNext(null);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onNext]);

  const progress = ((index + 1) / total) * 100;

  return (
    <div className="full-screen-center flex-col justify-center max-w-3xl mx-auto">

      <div className="">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">
            {index + 1}/{total}
          </span>
          <span className="font-medium">
            0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-light rounded mb-6">
          <div
            className="h-2 bg-primary rounded transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      

      {/* QUESTION */}
      <h3 className="text-h3 font-medium mb-6">
        {index + 1}. {question.question}
      </h3>

      {/* OPTIONS */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`option-btn w-full text-left px-4 py-3 rounded-lg border transition
              ${
                selectedOption === option
                  ? "border-primary active"
                  : ""
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center mt-8 gap-[40px]">
        <button
          onClick={() => onNext(selectedOption)}
          disabled={!selectedOption}
          className="bg-primary text-white px-8 py-3 rounded-lg font-medium
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLast ? "Finish" : "Next"}
        </button>

        <button
          onClick={() => onNext(null)}
          className="rounded-lg font-medium"
        >
          Skip this question
        </button>
      </div>
    </div>
  );
};

export default Question;
