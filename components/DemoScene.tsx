import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-game-container', // Make sure Phaser canvas is injected into the correct container
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: false
        }
      },
      scene: {
        preload: function (this: Phaser.Scene) {
          this.load.image('grid', '/images/game/platforms/grid.png');
          this.load.image('spriteSKALE', '/images/game/bosses/SKALE.png');
          this.load.image('spriteTRON', '/images/game/bosses/TRON.png');
        },
        create: function (this: Phaser.Scene) {
          // Add grid to the scene
          this.add.image(400, 300, 'grid');

          // Add SKALE sprite to the scene
          const spriteSKALE = this.add.sprite(200, 300, 'spriteSKALE');
          spriteSKALE.setInteractive(); // Makes the sprite interactive (optional)

          // Add TRON sprite to the scene
          const spriteTRON = this.add.sprite(600, 300, 'spriteTRON');
          spriteTRON.setInteractive(); // Makes the sprite interactive (optional)
        }
      }
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-game-container" />;
};

export default DemoScene;
