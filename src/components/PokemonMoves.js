import React, { useState } from 'react';

function PokemonMoves({ moves }) {
  // Set the number of moves to display initially
  const initialMoveCount = 6; // Adjust this number as needed
  const [showAll, setShowAll] = useState(false);

  // Determine which moves to display
  const displayedMoves = showAll ? moves : moves.slice(0, initialMoveCount);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Moves</h2>
      <div className="flex flex-wrap gap-2">
        {displayedMoves.map((move, index) => (
          <span
            key={index}
            className="bg-gray-300 text-gray-800 py-1 px-3 rounded-full text-sm capitalize"
          >
            {move.move.name}
          </span>
        ))}
      </div>

      {/* Show more / Show less button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-black-500 mt-4"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default PokemonMoves;
