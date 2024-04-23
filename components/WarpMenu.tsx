import React from 'react';

interface WarpMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const WarpMenu: React.FC<WarpMenuProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="warp-menu">
      <ul>
        <li onClick={() => { /* Handle Home action */ }}>Home</li>
        <li className="research-heading">Research Progress:</li>
        <li className="research-item">Etherlink (Pending)</li>
        <li className="research-item">Solana (Pending)</li>
        <li className="research-item">Skale (Pending)</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
