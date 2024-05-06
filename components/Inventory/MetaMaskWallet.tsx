// MetaMaskWallet.tsx
import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import styles from './MetaMaskWallet.module.css';

const MetaMaskWallet = () => {
    const [account, setAccount] = useState('');

    useEffect(() => {
        const connectWallet = async () => {
            const provider: any = await detectEthereumProvider();
            if (provider) {
                const accounts = await provider.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } else {
                console.log('Please install MetaMask!');
            }
        };

        connectWallet();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Metamask Wallet</h1>
            <div>
                {account ? (
                    <p>Connected Account: {account}</p>
                ) : (
                    <button className={styles.testButton} onClick={() => window.location.reload()}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default MetaMaskWallet;
