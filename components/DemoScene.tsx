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

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          const spriteSKALE = this.add.sprite(cellWidth * 4.5, cellHeight * 1.5, 'spriteSKALE').setScale(0.6).setInteractive();
          const spriteEtherlink = this.add.sprite(cellWidth * 4.5, cellHeight * 1.5, 'spriteEtherlink').setScale(0.6).setInteractive().setVisible(false);

          this.data.set('currentBoss', 'spriteSKALE');

          // Define the toggleBoss function inside the create method
          const toggleBoss = (bossName: string) => {
            this.data.set('currentBoss', bossName);
            spriteSKALE.setVisible(bossName === 'spriteSKALE');
            spriteEtherlink.setVisible(bossName === 'spriteEtherlink');
          };

          // Initialize with the default boss
          toggleBoss('spriteSKALE');
        },
        update: function (this: Phaser.Scene) {
          const currentBossInScene = this.data.get('currentBoss');
          if (currentBossInScene !== currentBoss) {
            // The toggleBoss function needs to be accessible here, so you might need to adjust this logic.
            // Consider using an approach that doesn't require direct access to toggleBoss here.
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
