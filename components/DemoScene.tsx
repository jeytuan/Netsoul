import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

const DemoScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = new BABYLON.Engine(canvasRef.current, true);
            const scene = new BABYLON.Scene(engine);

            // Orthographic camera setup
            const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 10, 0), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

            // Adjust orthographic camera settings for grid scaling
            const adjustCamera = () => {
                const aspect = engine.getRenderWidth() / engine.getRenderHeight();
                camera.orthoTop = 3;
                camera.orthoBottom = -3;
                camera.orthoLeft = -3 * aspect;
                camera.orthoRight = 3 * aspect;
            };

            adjustCamera();

            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

            // Grid texture
            const gridTexture = new BABYLON.Texture("/images/game/platforms/grid.png", scene);
            const gridPlane = BABYLON.MeshBuilder.CreatePlane("gridPlane", { width: 6, height: 3 }, scene);
            gridPlane.rotation.x = Math.PI / 2; 

            const gridMaterial = new BABYLON.StandardMaterial("gridMat", scene);
            gridMaterial.diffuseTexture = gridTexture;
            gridPlane.material = gridMaterial;

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
