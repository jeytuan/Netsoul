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
          this.load.image('spriteEtherlink', '/images/game/bosses/Etherlink1.png');
        },
        create: function (this: Phaser.Scene) {
          const cols = 6;
          const rows = 3;
          const cellWidth = this.scale.width / cols;
          const cellHeight = this.scale.height / rows;
          
          // Adjust Y-offset for SKALE
          const yOffsetSKALE = -80; 

          // Adjust Y-offset for TRON to align with SKALE and move down by 20px
          const yOffsetTRON = yOffsetSKALE + 20; // Further adjustment based on screenshot

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          const spriteTRON = this.add.sprite(cellWidth * 1.5, (cellHeight * 1.5) + yOffsetTRON, 'spriteTRON').setScale(0.25 * 1.2).setInteractive();
          const spriteSKALE = this.add.sprite(cellWidth * 4.5, (cellHeight * 1.5) + yOffsetSKALE, 'spriteSKALE').setScale(0.6).setInteractive().setVisible(currentBoss === 'spriteSKALE');
          const spriteEtherlink = this.add.sprite(cellWidth * 4.5, (cellHeight * 1.5) + yOffsetSKALE, 'spriteEtherlink').setScale(0.6).setInteractive().setVisible(currentBoss === 'spriteEtherlink');

          this.data.set('currentBoss', currentBoss);
        },
        update: function (this: Phaser.Scene) {
          if (this.data.get('currentBoss') !== currentBoss) {
            this.data.set('currentBoss', currentBoss);
            this.children.each((gameObject) => {
              if (gameObject instanceof Phaser.GameObjects.Sprite && gameObject.texture.key !== 'spriteTRON') {
                gameObject.setVisible(gameObject.texture.key === `sprite${currentBoss}`);
              }
            });
          }
        }
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
        <button onClick={() => setCurrentBoss('spriteEtherlink')}>Etherlink Boss</button>
      </div>
      <div id="phaser-game-container" />
    </div>
  );
};

export default DemoScene;
