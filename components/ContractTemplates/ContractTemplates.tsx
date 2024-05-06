// File: components/ContractTemplates/ContractTemplates.tsx

import React from 'react';
import styles from '../SmartContractWorkshop/SmartContractWorkshop.module.css'; // Corrected path

interface ContractTemplatesProps {
  onSelectTemplate: (templateCode: string) => void;
}

const ContractTemplates: React.FC<ContractTemplatesProps> = ({ onSelectTemplate }) => {
  const templates = {
    BasicERC20: "// Basic ERC20 Token Contract\ncontract BasicERC20 {\n    uint256 public totalSupply;\n    function balanceOf(address _owner) public view returns (uint256 balance) {}\n    function transfer(address _to, uint256 _value) public returns (bool success) {}\n}",
    CantoLiquidityPool: "// Example liquidity pool contract\ncontract CantoLiquidityPool {\n    // Add liquidity pool logic here\n}",
    CantoSwapContract: "// Canto swap contract\ncontract CantoSwapContract {\n    // Add swap logic here\n}",
  };

  return (
    <div>
      <h3>Select a Template:</h3>
      {Object.entries(templates).map(([name, code]) => (
        <button className={styles.templateButton} key={name} onClick={() => onSelectTemplate(code)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ContractTemplates;
