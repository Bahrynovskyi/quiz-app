import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setsCore] = useState(0);


  return (
    <div className="App">
      <h1>USA Quiz</h1>

      <h2>Current Score: 2</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            1 out of 5 correct - (20%)
            <button>Restart Game</button>
          </h2>
        </div>
      ) : (
        <div className="question-card">
          <h2>Question 1 out of 5</h2>
          <h3 className="question-text">What is the capital of the US?</h3>

          <ul>
            <li>Boston</li>
            <li>New York City</li>
            <li>Washington DC</li>
            <li>Denver</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
