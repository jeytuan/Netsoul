// BuildingPlant.tsx
import React from 'react';
import './BuildingPlant.css'; // Make sure to create a corresponding CSS file

interface BuildingPlantProps {
  isVisible: boolean;
  onClose: () => void;
}

export const BuildingPlant: React.FC<BuildingPlantProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  // Placeholder function for launch MEV Node
  const handleLaunchNode = () => {
    console.log('Placeholder function for MEV Node launch');
  };

  return (
    <div className="mev-plant-ui">
      <h2 className="mev-plant-title">MEV Plant</h2>
      {/* MEV as a Resource Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">MEV as a Resource</h3>
        <p className="mev-section-description">
          Discover or earn MEV through gameplay to use for upgrades and special access.
        </p>
      </section>
    

    
      {/* Validator Nodes Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">Validator Nodes</h3>
        <p className="mev-section-description">
          Contribute to the network's security by setting up Validator Nodes.
        </p>
      </section>

      {/* MEV Redistribution Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">MEV Redistribution</h3>
        <p className="mev-section-description">
          Redistribute collected MEV back into the ecosystem to enhance community or earn rewards.
        </p>
      </section>

      {/* MEV Auctions Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">MEV Auctions</h3>
        <p className="mev-section-description">
          Participate in in-game auctions to bid for MEV, simulating transaction ordering.
        </p>
      </section>

      {/* Transparency Quests Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">Transparency Quests</h3>
        <p className="mev-section-description">
          Uncover MEV-related strategies used by corrupt validators in quests for a healthier economy.
        </p>
      </section>

      {/* Close Button */}
      <div className="mev-plant-close">
        <button onClick={onClose}>Close MEV Plant</button>
      </div>
           {/* Launch MEV Node Section */}
           <section className="mev-section">

        <button onClick={handleLaunchNode} className="launch-node-button">
          Launch MEV Node
        </button>
      </section>
      
    </div>
  );
};

/**
 * Enhancing the MEV Plant ("BuildingPlant.tsx")
To integrate the BuildingPlant.tsx with the terminal (TestScene.tsx), you could make the MEV Plant interactive by allowing users to:

1. Start MEV-related tasks from the terminal.
2. Fetch live stats about MEV opportunities or validator performances.
3. Bid in MEV auctions using commands in the terminal.
4. Trigger quests and receive updates on their progress via the terminal logs.

This would give a sense of interaction between the UI elements and the backend services you might have. 
You could simulate these interactions for the hackathon or hook them up to actual smart contracts if you have the infrastructure ready.
 */