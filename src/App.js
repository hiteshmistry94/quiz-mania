import { useState } from "react";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { quizData } from "./data/questions";

const App = () => {
  const [screen, setScreen] = useState("register"); // 👈 SINGLE SOURCE OF TRUTH
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(null);
  const [quizKey, setQuizKey] = useState(0);

  const startQuiz = (name, selectedCategory) => {
    setUserName(name);
    setCategory(selectedCategory);
    setScore(null);
    setQuizKey(prev => prev + 1);
    setScreen("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setScreen("result");
  };

  const retakeQuiz = () => {
    setScore(null);
    setQuizKey(prev => prev + 1);
    setScreen("quiz");
  };

  const exitQuiz = () => {
    setUserName("");
    setCategory(null);
    setScore(null);
    setScreen("register");
  };

  return (
    <>
      <Header
        userName={userName}
        showExit={screen === "quiz"}
        showAvatar={screen === "result"}
        onExit={exitQuiz}
      />

      {screen === "register" && (
        <Registration
          categories={quizData.categories}
          onStart={startQuiz}
        />
      )}

      {screen === "quiz" && (
        <Quiz
          key={quizKey}
          category={category}
          onFinish={finishQuiz}
        />
      )}

      {screen === "result" && (
        <Result
          score={score}
          totalQuestions={category.questions.length}
          onRetake={retakeQuiz}
        />
      )}
    </>
  );
};

export default App;
