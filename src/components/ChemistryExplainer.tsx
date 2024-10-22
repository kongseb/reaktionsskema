import React from 'react';

const ChemistryExplainer: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Afstemning af reaktionsskemaer</h2>
      
      <div className="mb-6">
        <p className="text-lg mb-4">
          At afstemme et reaktionsskema betyder at sikre, at antallet af atomer af hvert element er det samme på begge sider af reaktionspilen. Dette er baseret på loven om massebevarelse.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-bold">Husk:</p>
          <p>Atomer kan hverken skabes eller ødelægges i en kemisk reaktion - de omorganiseres blot!</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Trin til afstemning:</h3>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Tæl antallet af atomer for hvert element på begge sider</li>
        <li>Tilføj koefficienter foran molekylerne for at udligne antallet af atomer</li>
        <li>Brug de mindste hele tal som koefficienter</li>
        <li>Dobbelttjek at alle elementer er afstemt</li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4">Eksempler:</h3>
      
      <div className="space-y-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">1. Dannelse af vand</h4>
          <p className="mb-2">Uafstemt: H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O</p>
          <p className="mb-2">Afstemt: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p>
          <div className="flex items-center justify-center space-x-4 my-4">
            <div className="text-center">
              <p className="font-bold">Før</p>
              <div className="flex space-x-2">
                <span className="bg-red-200 px-2 py-1 rounded">H<sub>2</sub></span>
                <span className="bg-blue-200 px-2 py-1 rounded">O<sub>2</sub></span>
              </div>
            </div>
            <span className="text-2xl">→</span>
            <div className="text-center">
              <p className="font-bold">Efter</p>
              <div className="flex space-x-2">
                <span className="bg-purple-200 px-2 py-1 rounded">H<sub>2</sub>O</span>
                <span className="bg-purple-200 px-2 py-1 rounded">H<sub>2</sub>O</span>
              </div>
            </div>
          </div>
          <p>Vi tilføjede en koefficient 2 foran H<sub>2</sub> og H<sub>2</sub>O for at afstemme antallet af hydrogen- og oxygenatomer.</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">2. Dannelse af ammoniak</h4>
          <p className="mb-2">Uafstemt: N<sub>2</sub> + H<sub>2</sub> → NH<sub>3</sub></p>
          <p className="mb-2">Afstemt: N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub></p>
          <div className="flex items-center justify-center space-x-4 my-4">
            <div className="text-center">
              <p className="font-bold">Før</p>
              <div className="flex space-x-2">
                <span className="bg-indigo-200 px-2 py-1 rounded">N<sub>2</sub></span>
                <span className="bg-red-200 px-2 py-1 rounded">H<sub>2</sub></span>
                <span className="bg-red-200 px-2 py-1 rounded">H<sub>2</sub></span>
                <span className="bg-red-200 px-2 py-1 rounded">H<sub>2</sub></span>
              </div>
            </div>
            <span className="text-2xl">→</span>
            <div className="text-center">
              <p className="font-bold">Efter</p>
              <div className="flex space-x-2">
                <span className="bg-yellow-200 px-2 py-1 rounded">NH<sub>3</sub></span>
                <span className="bg-yellow-200 px-2 py-1 rounded">NH<sub>3</sub></span>
              </div>
            </div>
          </div>
          <p>Vi tilføjede en koefficient 3 foran H<sub>2</sub> og 2 foran NH<sub>3</sub> for at afstemme antallet af nitrogen- og hydrogenatomer.</p>
        </div>

        <div className="bg-pink-100 p-4 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">3. Forbrænding af metan</h4>
          <p className="mb-2">Uafstemt: CH<sub>4</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O</p>
          <p className="mb-2">Afstemt: CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</p>
          <div className="flex items-center justify-center space-x-4 my-4">
            <div className="text-center">
              <p className="font-bold">Før</p>
              <div className="flex space-x-2">
                <span className="bg-gray-200 px-2 py-1 rounded">CH<sub>4</sub></span>
                <span className="bg-blue-200 px-2 py-1 rounded">O<sub>2</sub></span>
                <span className="bg-blue-200 px-2 py-1 rounded">O<sub>2</sub></span>
              </div>
            </div>
            <span className="text-2xl">→</span>
            <div className="text-center">
              <p className="font-bold">Efter</p>
              <div className="flex space-x-2">
                <span className="bg-green-200 px-2 py-1 rounded">CO<sub>2</sub></span>
                <span className="bg-purple-200 px-2 py-1 rounded">H<sub>2</sub>O</span>
                <span className="bg-purple-200 px-2 py-1 rounded">H<sub>2</sub>O</span>
              </div>
            </div>
          </div>
          <p>Vi tilføjede en koefficient 2 foran O<sub>2</sub> og H<sub>2</sub>O for at afstemme antallet af oxygen- og hydrogenatomer.</p>
        </div>
      </div>

      <div className="mt-8 bg-green-200 p-4 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Husk disse tips:</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Start med at afstemme de mest komplekse molekyler</li>
          <li>Afstem metaller og ikke-ilt-elementer først</li>
          <li>Afstem oxygen og hydrogen til sidst</li>
          <li>Dobbelttjek altid din afstemning ved at tælle atomer på begge sider</li>
        </ul>
      </div>
    </div>
  );
};

export default ChemistryExplainer;