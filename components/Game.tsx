import Image from 'next/image';
import React, { useState } from 'react';

const Game: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 }); // Initial player position

  // Placeholder function for attacking the boss
  const attackBoss = () => {
    console.log('Attacking the boss!');
    // Implement attack logic here
  };

  return (
    <div className="game-container">
      {/* Grid */}
      <Image src="/images/game/platforms/Grid.png" fill={true} alt="Game Grid" className="game-grid" />

      {/* Player */}
      <Image 
        src="/images/game/players/basicSprite2.png" 
        alt="Player Avatar" 
        fill={true}
        className="player-avatar" 
        style={{ left: `${playerPosition.x}px`, top: `${playerPosition.y}px` }} 
      />

      {/* Boss */}
      <Image 
        src="/images/game/bosses/Solana.png" 
        fill={true}
        alt="Boss Sprite" 
        className="boss-sprite" 
        
        onClick={attackBoss}
      />

      {/* Game Actions */}
      <div className="game-actions">
        <button onClick={attackBoss}>Attack Boss</button>
      </div>
    </div>
  );
};

export default Game;
