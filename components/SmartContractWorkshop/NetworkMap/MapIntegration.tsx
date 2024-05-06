import React, { useContext } from 'react';
import ContractContext from '../../../src/contexts/ContractContext'; // Updated import path

const MapIntegration = () => {
    const context = useContext(ContractContext);

    if (!context) {
      console.error("ContractContext not available.");
      return <p>Contract data is not available. Please check the context provider.</p>; // Graceful handling
    }

    const { contracts } = context;

    const visualizeContracts = () => {
        console.log("Visualizing Contracts on Network Map:", contracts);
    };

    return (
        <div>
            <button onClick={visualizeContracts}>Visualize Contracts on Map</button>
        </div>
    );
};

export default MapIntegration;
