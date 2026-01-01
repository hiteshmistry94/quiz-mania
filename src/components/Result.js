const Result = ({ userName, score, totalQuestions, onRetake }) => {
  const incorrect =
    totalQuestions - score.correct - score.unanswered;

  const percentage = Math.round(
    (score.correct / totalQuestions) * 100
  );

  const isPassed = percentage >= 50;

  return (
    <div className="full-screen-center flex items-center justify-center px-4">
      <div className="text-center">

        {/* ICON */}
        <div className="mb-4">
          {isPassed ? (
            <div className="text-5xl">
              <img src="/images/pass.svg" alt="Congratulations" className="mx-auto w-24 h-24" />
            </div>
          ) : (
            <div className="text-5xl">
              <img src="/images/fail.svg" alt="Congratulations" className="mx-auto w-24 h-24" />
            </div>
          )}
        </div>

        {isPassed ? (
            <div>
              <h1 className="text-xl font-bold mb-2">Congratulations</h1>
              <p className="text-gray-600 mb-4">You successfully completed the Quiz and holds</p>
            </div>            
          ) : (
            <div>
              <p className="text-gray-600 mb-4">You successfully completed the Quiz but you need to</p>
              <h1 className="text-xl font-bold mb-2">Keep practicing!</h1>
            </div>
        )}


        {/* SCORE */}
        <div className="my-6">
          <p className="text-sm text-gray-500">Your Score</p>
          <p
            className={`text-4xl font-bold ${
              isPassed ? "text-green-600" : "text-red-500"
            }`}
          >
            {percentage}%
          </p>
          {isPassed && (
            <p className="text-green-600 font-medium mt-1">
              Great job!
            </p>
          )}
        </div>

        {/* SUMMARY */}
        <div className="text-gray-700 mb-6 border rounded-xl p-5">
          <p className="mb-2">
            Out of {totalQuestions} question
          </p>

          <div className="flex justify-between">
            <span className="text-green-600">
              {score.correct}: Correct
            </span>
            <span className="text-red-500">
              {incorrect}: Incorrect
            </span>
            <span className="text-gray-500">
              {score.unanswered}: Not answered
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onRetake}
          className="bg-primary text-white px-8 py-3 rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Retake Quiz
        </button>

      </div>
    </div>
  );
};

export default Result;
