import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/core/Sprites'; // Import sprite support

const DemoScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current, true);
            const scene = new BABYLON.Scene(engine);

            const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 10, 0), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

            const adjustCamera = () => {
                const aspect = engine.getRenderWidth() / engine.getRenderHeight();
                camera.orthoTop = 3;
                camera.orthoBottom = -3;
                camera.orthoLeft = -3 * aspect;
                camera.orthoRight = 3 * aspect;
            };

            adjustCamera();

            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

            const gridTexture = new BABYLON.Texture("/images/game/platforms/grid.png", scene);
            const gridPlane = BABYLON.MeshBuilder.CreatePlane("gridPlane", { width: 6, height: 3 }, scene);
            gridPlane.rotation.x = Math.PI / 2; 

            const gridMaterial = new BABYLON.StandardMaterial("gridMat", scene);
            gridMaterial.diffuseTexture = gridTexture;
            gridPlane.material = gridMaterial;

            // Sprite Managers
            const spriteManagerSKALE = new BABYLON.SpriteManager("spriteManagerSKALE", "/images/game/bosses/SKALE.png", 1, { width: 64, height: 64 }, scene);
            const spriteManagerTRON = new BABYLON.SpriteManager("spriteManagerTRON", "/images/game/bosses/TRON.png", 1, { width: 64, height: 64 }, scene);

            // Create sprites
            const spriteSKALE = new BABYLON.Sprite("spriteSKALE", spriteManagerSKALE);
            spriteSKALE.position = new BABYLON.Vector3(0, 0, 0); // Position at (2,2) on the grid
            spriteSKALE.size = 1; // Set sprite size

            const spriteTRON = new BABYLON.Sprite("spriteTRON", spriteManagerTRON);
            spriteTRON.position = new BABYLON.Vector3(3, 0, 0); // Position at (2,5) on the grid
            spriteTRON.size = 1; // Set sprite size

            engine.runRenderLoop(() => {
                scene.render();
            });

            const resizeEngine = () => {
                engine.resize();
                adjustCamera();
            };

            window.addEventListener('resize', resizeEngine);

            return () => {
                scene.dispose();
                engine.dispose();
                window.removeEventListener('resize', resizeEngine);
            };
        }
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default DemoScene;
