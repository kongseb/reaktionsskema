import React from 'react';
import { BookOpen, PlayCircle } from 'lucide-react';

interface GameSelectorProps {
  onSelect: (section: string) => void;
}

const GameSelector: React.FC<GameSelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => onSelect('explainer')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <BookOpen className="mr-2" />
        Lær om afstemning
      </button>
      <button
        onClick={() => onSelect('balancingGame')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <PlayCircle className="mr-2" />
        Øv afstemning
      </button>
    </div>
  );
};

export default GameSelector;