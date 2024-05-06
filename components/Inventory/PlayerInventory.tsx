// PlayerInventory.tsx
import React from 'react';
import MetaMaskWallet from './MetaMaskWallet';
import styles from './PlayerInventory.module.css';

const PlayerInventory = () => {
    const [isWalletConnected, setIsWalletConnected] = React.useState(false);

    const handleConnectWallet = () => {
        setIsWalletConnected(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Player Inventory</h1>
            {isWalletConnected ? (
                <MetaMaskWallet />
            ) : (
                <button className={styles.connectButton} onClick={handleConnectWallet}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default PlayerInventory;
