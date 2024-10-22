import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const BalanceScale: React.FC = () => {
  const [leftSide, setLeftSide] = useState<number[]>([]);
  const [rightSide, setRightSide] = useState<number[]>([]);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateProblem = () => {
    const x = Math.floor(Math.random() * 10) + 1;
    const leftCount = Math.floor(Math.random() * 3) + 1;
    const rightCount = Math.floor(Math.random() * 3) + 1;
    
    setLeftSide(Array(leftCount).fill(x));
    setRightSide(Array(rightCount).fill(0).map(() => Math.floor(Math.random() * 20) + 1));
    setUserGuess('');
    setFeedback('');
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const checkBalance = () => {
    const leftSum = leftSide.reduce((a, b) => a + b, 0);
    const rightSum = rightSide.reduce((a, b) => a + b, 0);
    const xValue = rightSum / leftSide.length;

    if (parseInt(userGuess) === xValue) {
      setFeedback('Korrekt! Vægten er i balance.');
    } else {
      setFeedback('Ikke helt rigtigt. Prøv igen!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Balancevægt</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="text-center mr-4">
          <p className="font-bold mb-2">Venstre side</p>
          <div className="flex justify-center items-center">
            {leftSide.map((_, index) => (
              <div key={index} className="w-8 h-8 bg-blue-500 rounded-full mx-1 flex items-center justify-center text-white font-bold">
                x
              </div>
            ))}
          </div>
        </div>
        <Scale className="text-gray-600 w-8 h-8" />
        <div className="text-center ml-4">
          <p className="font-bold mb-2">Højre side</p>
          <div className="flex justify-center items-center">
            {rightSide.map((value, index) => (
              <div key={index} className="w-8 h-8 bg-green-500 rounded-full mx-1 flex items-center justify-center text-white font-bold">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mb-2">Hvad er værdien af x for at balancere vægten?</p>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Indtast værdien af x"
      />
      <button
        onClick={checkBalance}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Tjek balance
      </button>
      <button
        onClick={generateProblem}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        Nyt problem
      </button>
      {feedback && (
        <p className={`text-center font-bold mt-4 ${feedback.includes('Korrekt') ? 'text-green-600' : 'text-red-600'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default BalanceScale;