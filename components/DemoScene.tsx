import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState('spriteSKALE');

  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 1300,
      height: 750,
      parent: 'phaser-game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: false,
        },
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
          const yOffsetSKALE = -100; // Y-offset for SKALE
          const yOffsetTRON = -75; // Y-offset for TRON, reduced by 25px

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          const spriteSKALE = this.add.sprite(cellWidth * 4.5, (cellHeight * 1.5) + yOffsetSKALE, 'spriteSKALE').setScale(0.6).setInteractive().setVisible(currentBoss === 'spriteSKALE');
          const spriteTRON = this.add.sprite(cellWidth * 1.5, (cellHeight * 1.5) + yOffsetTRON, 'spriteTRON').setScale(0.25).setInteractive().setVisible(currentBoss === 'spriteTRON');

          this.data.set('currentBoss', currentBoss);
        },
        update: function (this: Phaser.Scene) {
          if (this.data.get('currentBoss') !== currentBoss) {
            this.data.set('currentBoss', currentBoss);
            this.children.each((gameObject) => {
              if (gameObject instanceof Phaser.GameObjects.Sprite) {
                gameObject.setVisible(gameObject.texture.key === `sprite${currentBoss}`);
              }
            });
          }
        },
      },
    });

    return () => {
      game.destroy(true);
    };
  }, [currentBoss]);

  return (
    <div>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <button onClick={() => setCurrentBoss('spriteSKALE')}>SKALE Boss</button>
        <button onClick={() => setCurrentBoss('spriteTRON')}>TRON Boss</button>
      </div>
      <div id="phaser-game-container" />
    </div>
  );
};

export default DemoScene;
