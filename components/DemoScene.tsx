import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800, // Adjust to match grid size
      height: 400, // Adjust to match grid size
      parent: 'phaser-game', // Div ID where Phaser injects the canvas
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    };

    new Phaser.Game(config);

    function preload() {
      this.load.image('grid', '/images/game/platforms/grid.png');
      this.load.image('spriteSKALE', '/images/game/bosses/SKALE.png');
      this.load.image('spriteTRON', '/images/game/bosses/TRON.png');
    }

    function create() {
      // Background grid
      this.add.image(400, 200, 'grid').setScale(0.5); // Adjust scale as needed

      // Sprites
      this.add.image(200, 200, 'spriteSKALE').setScale(0.5); // Position and scale sprite
      this.add.image(600, 200, 'spriteTRON').setScale(0.5); // Position and scale sprite
    }
  }, []);

  return <div id="phaser-game" style={{ width: '800px', height: '400px', margin: '0 auto' }} />;
};

export default DemoScene;
