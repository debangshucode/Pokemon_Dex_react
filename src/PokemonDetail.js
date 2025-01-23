import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from './components/PokemonCard';
import PokemonBasicInfo from './components/PokemonBasicInfo';
import PokemonAbilities from './components/PokemonAbilities';
import PokemonStats from './components/PokemonStats';
import PokemonMoves from './components/PokemonMoves';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilityDetails, setAbilityDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error('Failed to fetch Pokémon data');
        const data = await response.json();
        setPokemon(data);

        
        const abilities = await Promise.all(
          data.abilities.map(async (ability) => {
            const abilityResponse = await fetch(ability.ability.url);
            const abilityData = await abilityResponse.json();
            return abilityData;
          })
        );
        setAbilityDetails(abilities);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (name) {
      fetchPokemonData();
    }
  }, [name]);

  if (loading) {
    return <div className="text-center p-4 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{pokemon.name.toUpperCase()}</h1>
        <PokemonCard pokemon={pokemon} />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md">
        <PokemonBasicInfo pokemon={pokemon} />
        <PokemonAbilities abilities={pokemon.abilities} abilityDetails={abilityDetails} />
      </div>

     
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Stats</h2>
        <PokemonStats stats={pokemon.stats} />
      </div>

     
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Moves</h2>
        <PokemonMoves moves={pokemon.moves} />
      </div>

      
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold mb-2">Type</h2>
        <ul className="grid grid-cols-2 gap-2">
          {pokemon.types.map((type) => (
            <li key={type.type.name} className="bg-red-500 rounded-md text-center p-2">{type.type.name.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;