import React from 'react';

function PokemonStats({ stats }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Stats</h3>
      <ul className="space-y-2">
        {stats.map((stat) => (
          <li key={stat.stat.name} className="flex justify-between items-center text-lg text-gray-700">
            <span className="capitalize">{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonStats;
