import { useState } from "react";
import Question from "./Question";

const Quiz = ({ category, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, unanswered: 0 });

  const currentQuestion = category.questions[currentIndex];

  const handleNext = (selectedOption) => {
    const updated = { ...score };

    if (!selectedOption) {
      updated.unanswered += 1;
    } else if (selectedOption[0] === currentQuestion.correctAnswer) {
      updated.correct += 1;
    }

    setScore(updated);

    if (currentIndex === category.questions.length - 1) {
      onFinish(updated);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <Question
      key={currentQuestion.id}
      question={currentQuestion}
      index={currentIndex}
      total={category.questions.length}
      onNext={handleNext}
      isLast={currentIndex === category.questions.length - 1}
    />
  );
};

export default Quiz;
