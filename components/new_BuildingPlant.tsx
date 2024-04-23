import React from 'react';
import './BuildingPlant.css'; // Make sure to create a corresponding CSS file

interface BuildingPlantProps {
  isVisible: boolean;
  onClose: () => void;
  onLaunchNode: () => void; // Add this prop for launching MEV node
}

export const BuildingPlant: React.FC<BuildingPlantProps> = ({
  isVisible,
  onClose,
  onLaunchNode, // Make sure to include this in the component props
}) => {
  if (!isVisible) return null;

  // Function to handle the launch MEV node action
  const handleLaunchNode = () => {
    // Call the onLaunchNode function passed down from the parent component
    onLaunchNode();
  };

  return (
    <div className="mev-plant-ui">
      {/* ...existing sections... */}
      {/* Launch MEV Node Section */}
      <section className="mev-section">
        <h3 className="mev-section-title">Launch MEV Node</h3>
        <p className="mev-section-description">
          Start contributing to the network by launching your own MEV Node.
        </p>
        <button onClick={handleLaunchNode} className="launch-node-button">
          Launch MEV Node
        </button>
      </section>
      {/* Close Button */}
      <div className="mev-plant-close">
        <button onClick={onClose}>Close MEV Plant</button>
      </div>
    </div>
  );
};
