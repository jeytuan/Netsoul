import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

const DemoScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current, true);
            const scene = new BABYLON.Scene(engine);

            // Camera setup to view the grid
            const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 4, Math.PI / 3, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.attachControl(canvasRef.current, true);

            // Light setup
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

            // Grid texture
            const gridTexture = new BABYLON.Texture("/images/game/platforms/grid.png", scene);

            // Create a plane to apply the grid texture
            const gridPlane = BABYLON.MeshBuilder.CreatePlane("gridPlane", { width: 6, height: 3 }, scene);
            gridPlane.rotation.x = Math.PI / 2; // Rotate to lay flat

            // Apply the texture to the plane
            const gridMaterial = new BABYLON.StandardMaterial("gridMat", scene);
            gridMaterial.diffuseTexture = gridTexture;
            gridPlane.material = gridMaterial;

            // Render loop
            engine.runRenderLoop(() => {
                scene.render();
            });

            // Resize event handler
            const resizeEngine = () => engine.resize();
            
            // Handle browser resize events
            window.addEventListener('resize', resizeEngine);

            // Cleanup function on component unmount
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
