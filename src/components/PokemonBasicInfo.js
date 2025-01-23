import React from 'react';

function PokemonBasicInfo({ pokemon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Basic Information</h3>
      <p className="text-lg text-gray-600">Height: {pokemon.height} decimeters</p>
      <p className="text-lg text-gray-600">Weight: {pokemon.weight} hectograms</p>
      <p className="text-lg text-gray-600">Species: {pokemon.species.name} </p>
      
    </div>
  );
}

export default PokemonBasicInfo;
