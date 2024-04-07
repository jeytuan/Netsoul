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
                    gravity: { y: 0 },
                    debug: false
                }
            },
            scene: {
                preload: preload,
                create: create
            }
        };

        new Phaser.Game(config);

        function preload() {
            this.load.image('grid', '/images/game/platforms/grid.png');
            this.load.image('spriteSKALE', '/images/game/bosses/SKALE.png');
            this.load.image('spriteTRON', '/images/game/bosses/TRON.png');
        }

        function create() {
            // Add grid background
            this.add.image(400, 300, 'grid').setScale(0.5);

            // Add sprites
            this.add.image(350, 300, 'spriteSKALE').setScale(0.1); // Adjust scale as needed
            this.add.image(450, 300, 'spriteTRON').setScale(0.2);  // Adjust scale as needed
        }
    }, []);

    return <div id="phaser-game"></div>;
};

export default DemoScene;
