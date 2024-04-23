import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

const BattleScene: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState('SKALE');

  useEffect(() => {
    let spriteSKALE: Phaser.GameObjects.Sprite;
    let spriteTRON: Phaser.GameObjects.Sprite;
    let spriteEtherlink: Phaser.GameObjects.Sprite;

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
          // Preload assets
          this.load.image('grid', '/images/game/platforms/grid.png');
          this.load.image('SKALE', '/images/game/bosses/SKALE.png');
          this.load.image('TRON', '/images/game/bosses/TRON.png');
          this.load.image('Etherlink', '/images/game/bosses/Etherlink1_front.png');
        },
        create: function (this: Phaser.Scene) {
          const cols = 6;
          const rows = 3;
          const cellWidth = this.scale.width / cols;
          const cellHeight = this.scale.height / rows;

          // Adjust Y-offset for SKALE
          const yOffsetSKALE = -80;
          // Adjust Y-offset for TRON to align with SKALE and move down by 20px
          const yOffsetTRON = yOffsetSKALE + 20;

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          // TRON avatar
          spriteTRON = this.add.sprite(cellWidth * 1.5, (cellHeight * 1.5) + yOffsetTRON, 'TRON').setScale(0.25 * 1.2).setInteractive();

          // Boss sprites
          spriteSKALE = this.add.sprite(cellWidth * 4.5, (cellHeight * 1.5) + yOffsetSKALE, 'SKALE').setScale(0.6).setInteractive().setVisible(currentBoss === 'SKALE');
          spriteEtherlink = this.add.sprite(cellWidth * 4.5, (cellHeight * 2.5) + yOffsetSKALE, 'Etherlink').setScale(0.6).setInteractive().setVisible(currentBoss === 'Etherlink');

          // Make sprites interactive
          spriteSKALE.on('pointerdown', () => setCurrentBoss('SKALE'));
          spriteEtherlink.on('pointerdown', () => setCurrentBoss('Etherlink'));

          // Update visibility based on current boss
          this.events.on('update', () => {
            spriteTRON.setVisible(true); // TRON is always visible
            spriteSKALE.setVisible(currentBoss === 'SKALE');
            spriteEtherlink.setVisible(currentBoss === 'Etherlink');
          });
        }
      },
    });

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [currentBoss]);

  return (
    <div>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <button onClick={() => setCurrentBoss('SKALE')}>SKALE Boss</button>
        <button onClick={() => setCurrentBoss('Etherlink')}>Etherlink Boss</button>
      </div>
      <div id="phaser-game-container" />
    </div>
  );
};

export default BattleScene;
