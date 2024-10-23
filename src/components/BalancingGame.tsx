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
      reactants: ['H₂', 'O₂'],
      products: ['H₂O'],
      balancedCoefficients: [2, 1, 2]
    },
    {
      reactants: ['N₂', 'H₂'],
      products: ['NH₃'],
      balancedCoefficients: [1, 3, 2]
    },
    {
      reactants: ['CH₄', 'O₂'],
      products: ['CO₂', 'H₂O'],
      balancedCoefficients: [1, 2, 1, 2]
    },
    {
      reactants: ['C₃H₈', 'O₂'],
      products: ['CO₂', 'H₂O'],
      balancedCoefficients: [1, 5, 3, 4]
    },
    {
      reactants: ['Fe', 'O₂'],
      products: ['Fe₂O₃'],
      balancedCoefficients: [4, 3, 2]
    },
    {
      reactants: ['Al', 'HCl'],
      products: ['AlCl₃', 'H₂'],
      balancedCoefficients: [2, 6, 2, 3]
    },
    {
      reactants: ['NaHCO₃'],
      products: ['Na₂CO₃', 'H₂O', 'CO₂'],
      balancedCoefficients: [2, 1, 1, 1]
    },
    {
      reactants: ['C₂H₅OH', 'O₂'],
      products: ['CO₂', 'H₂O'],
      balancedCoefficients: [1, 3, 2, 3]
    },
    {
      reactants: ['KClO₃'],
      products: ['KCl', 'O₂'],
      balancedCoefficients: [2, 2, 3]
    },
    {
      reactants: ['Cu', 'HNO₃'],
      products: ['Cu(NO₃)₂', 'NO₂', 'H₂O'],
      balancedCoefficients: [1, 4, 1, 2, 2]
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

  const getElementColor = (element: string) => {
    const colors: { [key: string]: string } = {
      'H': 'bg-red-200',
      'O': 'bg-blue-200',
      'N': 'bg-indigo-200',
      'C': 'bg-gray-200',
      'Fe': 'bg-orange-200',
      'Al': 'bg-purple-200',
      'Na': 'bg-yellow-200',
      'K': 'bg-pink-200',
      'Cl': 'bg-green-200',
      'Cu': 'bg-teal-200'
    };
    return colors[element.split('')[0]] || 'bg-gray-200';
  };

  const renderMolecule = (molecule: string) => {
    return (
      <span className={`${getElementColor(molecule)} px-2 py-1 rounded`}>
        {molecule}
      </span>
    );
  };

  if (!reaction) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Afstem reaktionsskemaet</h2>
      <div className="flex flex-wrap justify-center items-center mb-4 text-xl">
        <div className="flex flex-wrap justify-center items-center mb-2">
          {reaction.reactants.map((reactant, index) => (
            <React.Fragment key={`reactant-${index}`}>
              {index > 0 && <span className="mx-1 my-1">+</span>}
              <div className="flex items-center m-1">
                <input
                  type="number"
                  min="1"
                  value={userCoefficients[index]}
                  onChange={(e) => handleCoefficientChange(index, e.target.value)}
                  className="w-10 p-1 border rounded mr-1 text-center"
                />
                {renderMolecule(reactant)}
              </div>
            </React.Fragment>
          ))}
        </div>
        <span className="mx-2 my-2">→</span>
        <div className="flex flex-wrap justify-center items-center mt-2">
          {reaction.products.map((product, index) => (
            <React.Fragment key={`product-${index}`}>
              {index > 0 && <span className="mx-1 my-1">+</span>}
              <div className="flex items-center m-1">
                <input
                  type="number"
                  min="1"
                  value={userCoefficients[index + reaction.reactants.length]}
                  onChange={(e) => handleCoefficientChange(index + reaction.reactants.length, e.target.value)}
                  className="w-10 p-1 border rounded mr-1 text-center"
                />
                {renderMolecule(product)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
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
