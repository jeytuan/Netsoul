import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 1300, // Adjust as needed
      height: 750, // Adjust as needed
      parent: 'phaser-game-container',
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
          const grid = this.add.image(0, 0, 'grid').setOrigin(0, 0);
          // Scale the grid to fit the game dimensions
          grid.displayWidth = this.sys.canvas.width;
          grid.displayHeight = this.sys.canvas.height;

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
