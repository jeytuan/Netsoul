import Head from 'next/head';
import React from 'react';

const TestNet = () => {
  const handleConnectMetaMask = () => {
    // Logic to connect MetaMask to the Etherlink testnet
  };

  const handleSendXTZ = () => {
    // Logic to send testnet XTZ to the user's MetaMask wallet
  };

  return (
    <>
      <Head>
        <title>TestNet | Netsoul</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Get testnet XTZ on Etherlink</h1>
        <p className="mb-4">
          If you have tez (XTZ) on the Tezos Ghostnet network or get some from the Ghostnet Faucet, you can bridge them to Etherlink XTZ by using the bridge at{' '}
          <a href="https://bridge.etherlink.com/" className="text-blue-500 hover:underline">
            https://bridge.etherlink.com/
          </a>
          .
        </p>
        <p className="mb-4">
          Follow these steps to connect MetaMask and get XTZ tokens that you can use to pay transaction fees on Etherlink Testnet:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Install MetaMask in your browser.</li>
          <li>Go to <a href="https://faucet.etherlink.com/" className="text-blue-500 hover:underline">faucet.etherlink.com</a>.</li>
          <li>Under "Get testnet XTZ on Etherlink," click Switch Network and approve the request to add a network and switch networks in MetaMask.</li>
          <li>Click Connect Etherlink to MetaMask and approve the connection in MetaMask.</li>
          <li>Solve the CAPTCHA on the page.</li>
          <li>Click Send 0.1 XTZ to.</li>
        </ol>
        <button onClick={handleConnectMetaMask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Connect Etherlink to MetaMask
        </button>
        <button onClick={handleSendXTZ} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send 0.1 XTZ to
        </button>
      </div>
    </>
  );
};

export default TestNet;
