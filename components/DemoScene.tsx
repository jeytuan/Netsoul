import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

const BabylonScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current, true);
            const scene = new BABYLON.Scene(engine);

            // Camera and light setup
            const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene);
            camera.attachControl(canvasRef.current, true);

            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

            // Add additional scene setup, meshes, etc. here

            // Render loop
            engine.runRenderLoop(() => {
                scene.render();
            });

            // Handle browser resize events
            window.addEventListener('resize', () => {
                engine.resize();
            });

            // Cleanup function on component unmount
            return () => {
                scene.dispose();
                engine.dispose();
                window.removeEventListener('resize', engine.resize);
            };
        }
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default BabylonScene;
