import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch Pokémon list (first 20 Pokémon)
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
        const data = await response.json();
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokeResponse = await fetch(pokemon.url);
            const pokeData = await pokeResponse.json();
            return {
              name: pokemon.name,
              image: pokeData.sprites.front_default,
              url: pokemon.url,
            };
          })
        );
        setPokemonList(detailedData);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };
    fetchPokemonList();
  }, []);

  // Handle search query change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter Pokémon list based on search query
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredPokemonList.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
            className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-200"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
