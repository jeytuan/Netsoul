import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 1300,
      height: 750,
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
          const cols = 6;
          const rows = 3;
          const cellWidth = this.scale.width / cols;
          const cellHeight = this.scale.height / rows;

          const grid = this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          const spriteSKALE = this.add.sprite(cellWidth * 4.5, cellHeight * 1.5, 'spriteSKALE').setScale(0.8);
          spriteSKALE.setInteractive();

          const spriteTRON = this.add.sprite(cellWidth * 1.5, cellHeight * 1.5, 'spriteTRON').setScale(0.25);
          spriteTRON.setInteractive();
        }
      }
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-game-container" />;
};

export default DemoScene;
