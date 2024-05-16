import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

interface Tile {
  x: number;
  y: number;
  accessible: boolean;
}

const BattleScene: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState('SKALE');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [bossHealth, setBossHealth] = useState(100);

  useEffect(() => {
    let spriteECHO: Phaser.Physics.Arcade.Sprite | null = null;
    let spriteSKALE: Phaser.Physics.Arcade.Sprite | null = null;
    let playerHealthText: Phaser.GameObjects.Text | null = null;
    let bossHealthText: Phaser.GameObjects.Text | null = null;
    let projectiles: Phaser.Physics.Arcade.Group;

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
          this.load.image('ECHO', '/images/game/players/echo_neutral.png');
          this.load.image('echo_blast', '/images/game/players/echo_blast.png'); // Load the blast image
          this.load.image('projectile', '/images/game/effects/projectile.png'); // Load projectile image
        },
        create: function (this: Phaser.Scene) {
          const cols = 6;
          const rows = 3;
          const cellWidth = this.scale.width / cols;
          const cellHeight = this.scale.height / rows;

          const xOffset = cellWidth / 2;
          const yOffset = cellHeight / 2;

          this.add.image(0, 0, 'grid').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

          spriteECHO = this.physics.add.sprite(cellWidth / 2, cellHeight / 2, 'ECHO').setScale(0.55).setInteractive();
          spriteSKALE = this.physics.add.sprite(cellWidth * 4.5, cellHeight * 0.5, 'SKALE').setScale(0.52).setInteractive();

          playerHealthText = this.add.text(spriteECHO.x, spriteECHO.y + 50, `HP: ${playerHealth}`, { fontSize: '16px', color: '#fff' }).setOrigin(0.5);
          bossHealthText = this.add.text(spriteSKALE.x, spriteSKALE.y + 50, `HP: ${bossHealth}`, { fontSize: '16px', color: '#fff' }).setOrigin(0.5);

          projectiles = this.physics.add.group();

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
              if (sprite === spriteECHO) {
                playerHealthText?.setPosition(newX, newY + 50);
              } else if (sprite === spriteSKALE) {
                bossHealthText?.setPosition(newX, newY + 50);
              }
            } else {
              console.log(`Tile at x: ${newX}, y: ${newY} is not accessible or out of bounds`);
            }
          };

          // Function to fire a projectile
          const fireProjectile = (fromSprite: Phaser.GameObjects.Sprite) => {
            if (fromSprite === spriteECHO) {
              spriteECHO.setTexture('echo_blast'); // Change to the blast image
              setTimeout(() => {
                spriteECHO?.setTexture('ECHO'); // Revert back to the neutral image
              }, 200); // Change the duration as needed
            }
            const projectile = projectiles.create(fromSprite.x, fromSprite.y, 'projectile');
            projectile.setScale(0.1);
            projectile.body.velocity.x = 300; // Adjust the speed and direction as needed
            if (spriteSKALE) {
              this.physics.add.overlap(projectile, spriteSKALE, () => {
                setBossHealth((health) => {
                  const newHealth = health - 10;
                  if (newHealth <= 0) {
                    spriteSKALE?.destroy();
                    bossHealthText?.destroy();
                  }
                  return newHealth;
                });
                projectile.destroy();
              });
            }
          };

          // Setup keyboard controls
          if (this.input && this.input.keyboard) {
            const cursors = this.input.keyboard.createCursorKeys();
            this.input.keyboard.on('keydown-LEFT', () => {
              console.log('Left key pressed');
              if (spriteECHO) moveSprite(spriteECHO, 'LEFT');
            });
            this.input.keyboard.on('keydown-RIGHT', () => {
              console.log('Right key pressed');
              if (spriteECHO) moveSprite(spriteECHO, 'RIGHT');
            });
            this.input.keyboard.on('keydown-UP', () => {
              console.log('Up key pressed');
              if (spriteECHO) moveSprite(spriteECHO, 'UP');
            });
            this.input.keyboard.on('keydown-DOWN', () => {
              console.log('Down key pressed');
              if (spriteECHO) moveSprite(spriteECHO, 'DOWN');
            });
            this.input.keyboard.on('keydown-SPACE', () => {
              console.log('Space key pressed - Fire projectile');
              if (spriteECHO) fireProjectile(spriteECHO);
            });
            this.input.keyboard.on('keydown-Z', () => {
              console.log('Z key pressed - Block');
              // Implement block logic
            });
            this.input.keyboard.on('keydown-X', () => {
              console.log('X key pressed - Use NFchip');
              // Implement NFchip usage logic
            });
            this.input.keyboard.on('keydown-C', () => {
              console.log('C key pressed - Character skill');
              // Implement character skill logic
            });
          }

          spriteECHO?.setCollideWorldBounds(true);
          spriteSKALE?.setCollideWorldBounds(true);
        },
        update: function (this: Phaser.Scene) {
          if (bossHealthText) bossHealthText.setText(`HP: ${bossHealth}`);
          if (playerHealthText) playerHealthText.setText(`HP: ${playerHealth}`);
        },
      },
    };

    const game = new Phaser.Game(gameConfig);

    return () => game.destroy(true);
  }, [currentBoss, playerHealth, bossHealth]);

  return <div id="phaser-game-container" />;
};

export default BattleScene;
