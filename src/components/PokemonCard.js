import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full h-64 object-contain"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold capitalize">{pokemon.name}</h2>
      </div>
    </div>
  );
}

export default PokemonCard;
