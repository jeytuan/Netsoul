import React, { useEffect } from 'react';
import Phaser from 'phaser';

const DemoScene: React.FC = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300, x: 0 }, // Added x property
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
      // Preload assets
    }

    function create(this: Phaser.Scene) {
      // Create the game scene
    }
  }, []);

  return <div id="phaser-game" />;
};

export default DemoScene;
