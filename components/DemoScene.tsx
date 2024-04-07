import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-game',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 }, // Include both x and y properties
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    };

    new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image('grid', '/images/game/platforms/grid.png');
      this.load.image('spriteSKALE', '/images/game/bosses/SKALE.png');
      this.load.image('spriteTRON', '/images/game/bosses/TRON.png');
    }

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, 'grid');
      this.physics.add.image(200, 300, 'spriteSKALE').setScale(0.5);
      this.physics.add.image(600, 300, 'spriteTRON').setScale(0.5);
    }
  }, []);

  return <div id="phaser-game" style={{ width: '800px', height: '600px' }} />;
};

export default DemoScene;
