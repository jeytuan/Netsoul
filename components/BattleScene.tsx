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

    const gameConfig = {
      type: Phaser.AUTO,
      width: 1300,
      height: 750,
      parent: 'phaser-game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: true,
        },
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

          spriteTRON = this.physics.add.sprite(cellWidth / 2, cellHeight / 2, 'TRON').setScale(0.20).setInteractive();
          spriteSKALE = this.physics.add.sprite(cellWidth * 4.5, cellHeight * 0.5, 'SKALE').setScale(0.52).setInteractive();

          // Define the grid layout with explicit type
          const grid: Tile[] = [];
          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              const x = col * cellWidth + xOffset;
              const y = row * cellHeight + yOffset;
              grid.push({ x, y, accessible: col < 3 });
            }
          }
          console.log('Grid initialized:', grid);

          // Function to check if a tile is within bounds and accessible
          const isTileAccessible = (x: number, y: number): boolean => {
            const tile = grid.find(tile => Math.abs(tile.x - x) < cellWidth / 2 && Math.abs(tile.y - y) < cellHeight / 2);
            return !!tile && tile.accessible;
          };

          // Function to move the sprite within the grid
          const moveSprite = (sprite: Phaser.GameObjects.Sprite, direction: string) => {
            let newX = sprite.x;
            let newY = sprite.y;

            switch (direction) {
              case 'LEFT':
                newX -= cellWidth;
                break;
              case 'RIGHT':
                newX += cellWidth;
                break;
              case 'UP':
                newY -= cellHeight;
                break;
              case 'DOWN':
                newY += cellHeight;
                break;
              default:
                break;
            }

            newX = Math.round(newX);
            newY = Math.round(newY);

            console.log(`Trying to move sprite to x: ${newX}, y: ${newY}`);
            if (isTileAccessible(newX, newY)) {
              sprite.setPosition(newX, newY);
              console.log(`Moved sprite to x: ${newX}, y: ${newY}`);
            } else {
              console.log(`Tile at x: ${newX}, y: ${newY} is not accessible or out of bounds`);
            }
          };

          // Setup keyboard controls
          if (this.input && this.input.keyboard) {
            const cursors = this.input.keyboard.createCursorKeys();
            this.input.keyboard.on('keydown-LEFT', () => {
              console.log('Left key pressed');
              if (spriteTRON) moveSprite(spriteTRON, 'LEFT');
            });
            this.input.keyboard.on('keydown-RIGHT', () => {
              console.log('Right key pressed');
              if (spriteTRON) moveSprite(spriteTRON, 'RIGHT');
            });
            this.input.keyboard.on('keydown-UP', () => {
              console.log('Up key pressed');
              if (spriteTRON) moveSprite(spriteTRON, 'UP');
            });
            this.input.keyboard.on('keydown-DOWN', () => {
              console.log('Down key pressed');
              if (spriteTRON) moveSprite(spriteTRON, 'DOWN');
            });
          }

          spriteTRON?.setCollideWorldBounds(true);
          spriteSKALE?.setCollideWorldBounds(true);
        },
        update: function (this: Phaser.Scene) {
          // Additional update logic if needed
        },
      },
    };

    const game = new Phaser.Game(gameConfig);

    return () => game.destroy(true);
  }, [currentBoss]);

  return <div id="phaser-game-container" />;
};

export default BattleScene;
