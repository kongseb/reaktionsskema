import React, { useState, useEffect } from 'react';

interface Reaction {
  reactants: string[];
  products: string[];
  balancedCoefficients: number[];
}

const BalancingGame: React.FC = () => {
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [userCoefficients, setUserCoefficients] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('');

  const reactions: Reaction[] = [
    {
      reactants: ['H2', 'O2'],
      products: ['H2O'],
      balancedCoefficients: [2, 1, 2]
    },
    {
      reactants: ['N2', 'H2'],
      products: ['NH3'],
      balancedCoefficients: [1, 3, 2]
    },
    {
      reactants: ['CH4', 'O2'],
      products: ['CO2', 'H2O'],
      balancedCoefficients: [1, 2, 1, 2]
    }
  ];

  const generateReaction = () => {
    const newReaction = reactions[Math.floor(Math.random() * reactions.length)];
    setReaction(newReaction);
    setUserCoefficients(new Array(newReaction.balancedCoefficients.length).fill(1));
    setFeedback('');
  };

  useEffect(() => {
    generateReaction();
  }, []);

  const handleCoefficientChange = (index: number, value: string) => {
    const newCoefficients = [...userCoefficients];
    newCoefficients[index] = parseInt(value) || 1;
    setUserCoefficients(newCoefficients);
  };

  const checkBalance = () => {
    if (reaction) {
      const isCorrect = userCoefficients.every((coeff, index) => coeff === reaction.balancedCoefficients[index]);
      setFeedback(isCorrect ? 'Korrekt! Godt gået!' : 'Ikke helt rigtigt. Prøv igen!');
    }
  };

  if (!reaction) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Afstem reaktionsskemaet</h2>
      <div className="flex justify-center items-center mb-4 text-xl">
        {reaction.reactants.map((reactant, index) => (
          <React.Fragment key={`reactant-${index}`}>
            {index > 0 && <span className="mx-2">+</span>}
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                value={userCoefficients[index]}
                onChange={(e) => handleCoefficientChange(index, e.target.value)}
                className="w-12 p-1 border rounded mr-1 text-center"
              />
              <span>{reactant}</span>
            </div>
          </React.Fragment>
        ))}
        <span className="mx-4">→</span>
        {reaction.products.map((product, index) => (
          <React.Fragment key={`product-${index}`}>
            {index > 0 && <span className="mx-2">+</span>}
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                value={userCoefficients[index + reaction.reactants.length]}
                onChange={(e) => handleCoefficientChange(index + reaction.reactants.length, e.target.value)}
                className="w-12 p-1 border rounded mr-1 text-center"
              />
              <span>{product}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={checkBalance}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Tjek afstemning
        </button>
        <button
          onClick={generateReaction}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Ny reaktion
        </button>
      </div>
      {feedback && (
        <p className={`text-center font-bold mt-4 ${feedback.includes('Korrekt') ? 'text-green-600' : 'text-red-600'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default BalancingGame;