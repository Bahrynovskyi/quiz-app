import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Ukraine?",
      options: [
        { id: 0, text: "Lviv", isCorrect: false },
        { id: 1, text: "Odessa", isCorrect: false },
        { id: 2, text: "Kiev", isCorrect: false },
        { id: 3, text: "Kyiv", isCorrect: true },
      ],
    },
    {
      text: "What country is not borderring the Ukraine?",
      options: [
        { id: 0, text: "Lithuania", isCorrect: true },
        { id: 1, text: "Romania", isCorrect: false },
        { id: 2, text: "Slovakia", isCorrect: false },
        { id: 3, text: "Hungary", isCorrect: false },
      ],
    },
    {
      text: "How to say “hi” in Ukrainian?",
      options: [
        { id: 0, text: "Pryvit", isCorrect: true },
        { id: 1, text: "Hai", isCorrect: false },
        { id: 2, text: "Dopobachennia", isCorrect: false },
        { id: 3, text: "Papa", isCorrect: false },
      ],
    },
    {
      text: "What is Official language in Ukraine?",
      options: [
        { id: 0, text: "Polish", isCorrect: false },
        { id: 1, text: "Ukrainian", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
      ],
    },
    {
      text: "Which of the following cities or towns in Ukraine is the smallest?",
      options: [
        { id: 0, text: "Poltava", isCorrect: false },
        { id: 1, text: "Cherkasy", isCorrect: true },
        { id: 2, text: "Khesrson", isCorrect: false },
        { id: 3, text: "Lviv", isCorrect: false },
      ],
    },
  ];


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Quiz</h1>

      {showResults ? (
        <div className="final-results">
          <h2>Score: {score}</h2>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (

        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;