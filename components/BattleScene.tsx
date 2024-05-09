import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

interface Tile {
  x: number;
  y: number;
  accessible: boolean;
}

const BattleScene: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState('SKALE');

  useEffect(() => {
    let spriteTRON: Phaser.Physics.Arcade.Sprite | null = null;
    let spriteSKALE: Phaser.Physics.Arcade.Sprite | null = null;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 1300,
      height: 750,
      parent: 'phaser-game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: true
        },
      },
      input: {
        keyboard: true
      },
      scene: {
        preload: function (this: Phaser.Scene) {
          this.load.image('grid', '/images/game/platforms/grid.png');
          this.load.image('SKALE', '/images/game/bosses/SKALE.png');
          this.load.image('TRON', '/images/game/bosses/TRON.png');
        },
        create: function (this: Phaser.Scene) {
          const cols = 6;
          const rows = 3;
          const cellWidth = this.scale.width / cols;
          const cellHeight = this.scale.height / rows;

          const xOffset = cellWidth / 2;
          const yOffset = cellHeight / 2;  

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          spriteTRON = this.physics.add.sprite(cellWidth * 1.5 + xOffset, cellHeight * 1.5 + yOffset, 'TRON').setScale(0.20).setInteractive();
          spriteSKALE = this.physics.add.sprite(cellWidth * 4.5 + xOffset, cellHeight * 0.5 + yOffset, 'SKALE').setScale(0.52).setInteractive();

          const playerAllowedTiles: Tile[] = [
            { x: cellWidth * 0.5 + xOffset, y: cellHeight * 0.5 + yOffset, accessible: true },
            // More tiles definitions
          ];

          const moveSprite = (sprite: Phaser.GameObjects.Sprite, newX: number, newY: number) => {
            const tile = playerAllowedTiles.find(tile => tile.x === newX && tile.y === newY);
            if (tile && tile.accessible) {
              sprite.x = newX;
              sprite.y = newY;
            }
          };

          // Setup keyboard controls
          // Setup keyboard controls
          if (this.input && this.input.keyboard) {
            const cursors = this.input.keyboard.createCursorKeys();
            this.input.keyboard.on('keydown-LEFT', () => {
              if (spriteTRON) moveSprite(spriteTRON, spriteTRON.x - cellWidth, spriteTRON.y);
            });
            this.input.keyboard.on('keydown-RIGHT', () => {
              if (spriteTRON) moveSprite(spriteTRON, spriteTRON.x + cellWidth, spriteTRON.y);
            });
            this.input.keyboard.on('keydown-UP', () => {
              if (spriteTRON) moveSprite(spriteTRON, spriteTRON.x, spriteTRON.y - cellHeight);
            });
            this.input.keyboard.on('keydown-DOWN', () => {
              if (spriteTRON) moveSprite(spriteTRON, spriteTRON.x, spriteTRON.y + cellHeight);
            });
          }

spriteTRON?.setCollideWorldBounds(true);
spriteSKALE?.setCollideWorldBounds(true);

        }
      },
    });
    
    return () => game.destroy(true);
  }, [currentBoss]);

  return <div id="phaser-game-container" />;
  };
  
  export default BattleScene;