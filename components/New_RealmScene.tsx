// RealmScene.tsx
import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';

import TestSuiteManager from './TestStudio/TestSuiteManager';
import BuildingPlant from './BuildingPlant';
import Playground from './Playground/Playground';
import PlayerInventory from './Inventory/PlayerInventory';
import SmartContractWorkshop from './SmartContractWorkshop/SmartContractWorkshop'

const RealmScene = () => {
  const [currentView, setCurrentView] = useState('default'); // Default view when no node is selected

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

          // Setup nodes with interactions based on specified positions
          // Assuming coordinates (x, y) have been determined and assigned as needed
          setupNode(this, 558, 37, 'DashboardOverview');
          setupNode(this, 553, 355, 'InteractiveNetworkMap');
          setupNode(this, 892, 80, 'TestSuiteManager');
          setupNode(this, 922, 378, 'SmartContractWorkshop');
          setupNode(this, 745, 552, 'PlayerInventory');
          setupNode(this, 316, 527, 'QuestLog');
          setupNode(this, 164, 395, 'Playground');
          setupNode(this, 117, 302, 'EducationalLibrary');
          setupNode(this, 263, 160, 'BuildingPlant');
        }
      }
    };

    const game = new Phaser.Game(config);

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, []);

  const setupNode = (scene: Phaser.Scene, x: number, y: number, view: string) => {
    const node = scene.add.image(x, y, 'glow').setScale(0.5);
    node.setInteractive();
    node.on('pointerdown', () => setCurrentView(view));
    scene.tweens.add({
      targets: node,
      scale: { from: 0.5, to: 0.6 },
      ease: 'Linear',
      duration: 800,
      repeat: -1,
      yoyo: true,
    });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'DashboardOverview':
        return <div>Dashboard Overview Component Here</div>;
      case 'InteractiveNetworkMap':
        return <div>Interactive Network Map Component Here</div>;
      case 'TestSuiteManager':
        return <TestSuiteManager />;
      case 'BuildingPlant':
        return <BuildingPlant />;
      case 'Playground':
        return <Playground />;
      case 'PlayerInventory':
        return <PlayerInventory />;
      case 'SmartContractWorkshop':
        return <SmartContractWorkshop />;
  
        
      // Add more cases as needed
      default:
        return <div>Select a node to view details.</div>;
    }
  };

  return (
    <>
      <div id="mev-realm-container" className="relative z-10">
        {/* Island concept image and other game UI elements */}
      </div>
      {renderCurrentView()}
    </>
  );
};

export default RealmScene;



/**
 * New_RealmScene.tsx Overview:
 * 
 * This scene aims to create an interactive gaming environment where each node on the map represents a distinct aspect of blockchain technology. 
 * By clicking on these nodes, users can trigger different views in the BrowserView component, dynamically changing the right-side panel to display relevant content or tools.
 * 
 * Steps to Develop and Test:
 * 1. Define all nodes on the map with clear functionality and linking them to specific 'views' or features in BrowserView.
 * 2. Implement the BrowserView component to handle dynamic content display based on the selected node.
 * 3. Expand each node with specific features:
 *    - Center Node: Warp Portal Menu which leads to Interactive Network Map
 *    - 12 o'clock node: Dashboard Overview with network status indicators.
 *    - 1 o' clock node: TestSuiteManager 
 *    - 3 o'clock node: Smart Contract Workshop for cross-blockchain contract interaction. Transaction Builder & Simulator for testing and simulating blockchain transactions.
 *    - 5 o'clock node: Player Inventory, NFChips, Wardrobe
 *    - 7 o'clock node: Quest Log .. View Experience Gained, Retro Earnings, 
 *    - 8 o'clock node: AI Playground , Avatar Creation Studio
 *    - 9 o'clock node: Educational Library - More interactive and educational features as listed (Historical Data Analysis, Event Monitoring, Bounty Board, etc.).
 *    - 10 o'clock node: MEV Plant .. Validators .. and Node Workers
 * 4. Ensure that each node and its corresponding view are fully integrated and functionally tested.
 * 5. Enhance user engagement through gamification and interactive challenges.
 * 
 * Each feature expansion aims to enhance the user experience by providing a comprehensive suite of blockchain-related tools and educational resources within a gamified environment.
 */
