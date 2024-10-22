import React, { useState } from 'react';

const EquationSolver: React.FC = () => {
  const [equation, setEquation] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateEquation = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    setEquation(`${a}x + ${b} = ${a * 2 + b}`);
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = () => {
    const [left, right] = equation.split('=');
    const x = (parseInt(right) - parseInt(left.split('+')[1])) / parseInt(left);
    if (parseInt(userAnswer) === x) {
      setFeedback('Korrekt! Godt gået!');
    } else {
      setFeedback('Ikke helt rigtigt. Prøv igen!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Ligningsløser</h2>
      <button
        onClick={generateEquation}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Generer ny ligning
      </button>
      {equation && (
        <div className="mb-4">
          <p className="text-xl text-center font-semibold">{equation}</p>
          <p className="text-sm text-gray-600 mt-2">Find værdien af x:</p>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            placeholder="Indtast dit svar"
          />
          <button
            onClick={checkAnswer}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Tjek svar
          </button>
        </div>
      )}
      {feedback && (
        <p className={`text-center font-bold ${feedback.includes('Korrekt') ? 'text-green-600' : 'text-red-600'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default EquationSolver;