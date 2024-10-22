import React from 'react';
import { FlaskConical } from 'lucide-react';
import GameSelector from './components/GameSelector';
import BalancingGame from './components/BalancingGame';
import ChemistryExplainer from './components/ChemistryExplainer';

function App() {
  const [selectedSection, setSelectedSection] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <FlaskConical className="text-green-600 w-12 h-12" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">
              <link rel="icon" href="/favicon.ico" sizes="any" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Reaktionsskema.dk</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <GameSelector onSelect={setSelectedSection} />
        
        {selectedSection === 'explainer' && <ChemistryExplainer />}
        {selectedSection === 'balancingGame' && <BalancingGame />}
        
        {!selectedSection && (
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600">Vælg en sektion ovenfor for at begynde at lære om afstemning af reaktionsskemaer!</p>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p className="mb-2">Lavet med ♥ til kemi og naturvidenskab af <a href="https://github.com/kongseb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kongseb</a>.</p>
          <p className="text-sm">&copy; 2024 Reaktionsskema.dk</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
