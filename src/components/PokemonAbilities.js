import React from 'react';

function PokemonAbilities({ abilities, abilityDetails }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Abilities</h3>
      <ul className="space-y-4">
        {abilities.map((ability, index) => (
          <li key={index} className="flex justify-between items-center text-lg text-gray-700">
            <span className="capitalize mr-4 font-medium">{ability.ability.name}</span>
            <span className="text-sm text-blue-600 break-words w-3/4">
              {abilityDetails[index]?.effect_entries[0]?.short_effect ? (
                `: ${abilityDetails[index]?.effect_entries[0]?.short_effect}`
              ) : (
                'Effect details are loading...'
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonAbilities;
