// RealmScene.tsx
import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';

import { WarpMenu } from './WarpMenu';
import { BuildingPlant } from './BuildingPlant';
import TestScene from './TestScene'; // Import the TestScene component

const RealmScene = () => {
  const [warpMenuVisible, setWarpMenuVisible] = useState(false);
  const [buildingPlantVisible, setBuildingPlantVisible] = useState(false);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1069,
      height: 768,
      parent: 'mev-realm-container',
      scene: {
        preload: function (this: Phaser.Scene) {
          this.load.image('island', 'images/game/platforms/island_concept.png');
          this.load.image('glow', 'images/game/effects/glow.png');
        },
        create: function (this: Phaser.Scene) {
          const island = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'island');
          island.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

          const warpGlow = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'glow').setScale(0.5);
          warpGlow.setInteractive();
          warpGlow.on('pointerdown', () => setWarpMenuVisible(v => !v));

          const offsetX = 156;
          const offsetY = -40;
          const buildingPlantX = this.cameras.main.width * 0.1 + offsetX;
          const buildingPlantY = this.cameras.main.height * 0.25 + offsetY;

          const buildingPlantGlow = this.add.image(buildingPlantX, buildingPlantY, 'glow').setScale(0.5);
          buildingPlantGlow.setInteractive();
          buildingPlantGlow.on('pointerdown', () => setBuildingPlantVisible(true));

          this.tweens.add({
            targets: [warpGlow, buildingPlantGlow],
            scale: { from: 0.5, to: 0.6 },
            ease: 'Linear',
            duration: 800,
            repeat: -1,
            yoyo: true,
          });
        },
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, []);

  return (
    <>
      <div id="mev-realm-container" className="relative z-10">
        {/* Island concept image and other game UI elements */}
      </div>

      {/* WarpMenu and BuildingPlant components are rendered based on state */}
      {warpMenuVisible && <WarpMenu isVisible={warpMenuVisible} onClose={() => setWarpMenuVisible(false)} />}
      {buildingPlantVisible && <BuildingPlant isVisible={buildingPlantVisible} onClose={() => setBuildingPlantVisible(false)} />}

      {/* TestScene Component, which includes the terminal and debugging logs */}
      <TestScene />
    </>
  );
};

export default RealmScene;
