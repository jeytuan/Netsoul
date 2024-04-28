import React, { useState } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers'; // Direct import from ethers v6
import styled from 'styled-components';

// Types for our state
type Network = {
  name: string;
  rpcUrl: string;
};

type TestResult = {
  success: boolean;
  message: string;
};

// Styled components for cool aesthetics
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #121212; // Dark mode background
  color: #fff; // Light text for contrast
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px; // Ensures the component is not too wide on large screens
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // A subtle shadow for depth
`;

const Button = styled.button`
  background: #4caf50; // A "go" green
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background: #45a049; // Darken the button on hover for feedback
  }
  &:disabled {
    background: #a5d6a7; // A disabled state that is visibly different
  }
`;

const Log = styled.pre`
  background: #1e1e1e;
  color: #9cdcfe; // Syntax-highlighter blue
  padding: 10px;
  overflow: auto;
  margin-top: 20px;
  border-radius: 4px;
`;

const BlockchainTester = () => {
    // Update your Ethereum Mainnet RPC URL here if needed
    const [network, setNetwork] = useState<Network>({
      name: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/83fb9491c1844537bf8c65bcf5a34480', // Replace with your actual RPC URL or Infura project ID
    });
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [isTesting, setIsTesting] = useState(false);
  
    const performTest = async () => {
      setIsTesting(true);
      try {
        // Initialize provider using ethers with the selected network's RPC URL
        const provider = new JsonRpcProvider(network.rpcUrl);
  
        // Example test: Get the latest block number
        const blockNumber = await provider.getBlockNumber();
  
        // If successful, update the test results state
        setTestResults(results => [...results, { success: true, message: `Current block number: ${blockNumber}` }]);
      } catch (error) {
        setTestResults(results => [
          ...results,
          { success: false, message: `Failed to connect to ${network.name}. Error: ${error instanceof Error ? error.message : String(error)}` },
        ]);
      } finally {
        setIsTesting(false);
      }
    };

  return (
    <Container>
      <Button onClick={performTest} disabled={isTesting}>
        {isTesting ? 'Testing...' : 'Test Connection'}
      </Button>
      <Log>
        {testResults.map((result, index) => (
          <div key={index} style={{ color: result.success ? '#4caf50' : '#f44336' }}>
            {result.message}
          </div>
        ))}
      </Log>
    </Container>
  );
};

export default BlockchainTester;
