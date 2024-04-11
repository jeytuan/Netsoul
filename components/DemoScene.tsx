import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState('spriteSKALE');

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      // ... existing config ...
      scene: {
        preload: function (this: Phaser.Scene) {
          // ... existing preload ...
          this.load.image('spriteEtherlink', '/images/game/bosses/Etherlink1.png');
        },
        create: function (this: Phaser.Scene) {
          // ... existing create logic ...

          // Toggle function for bosses
          const toggleBoss = () => {
            spriteSKALE.setVisible(currentBoss === 'spriteSKALE');
            spriteEtherlink.setVisible(currentBoss === 'spriteEtherlink');
          };

          // Add Etherlink sprite
          const spriteEtherlink = this.add.sprite(cellWidth * 4.5, (cellHeight * 1.5) + yOffsetSKALE, 'spriteEtherlink').setScale(0.6);
          spriteEtherlink.setInteractive();
          spriteEtherlink.setVisible(false); // Initially hidden

          // Call toggleBoss initially to set the correct visibility
          toggleBoss();

          // Update Phaser scene when currentBoss changes
          useEffect(() => {
            toggleBoss();
          }, [currentBoss]);
        }
      }
    };

    new Phaser.Game(config);
  }, []);

  // Menu for selecting bosses
  const BossMenu = () => (
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
      <button onClick={() => setCurrentBoss('spriteSKALE')}>SKALE Boss</button>
      <button onClick={() => setCurrentBoss('spriteEtherlink')}>Etherlink Boss</button>
    </div>
  );

  return (
    <div>
      <BossMenu />
      <div id="phaser-game-container" />
    </div>
  );
};

export default DemoScene;
