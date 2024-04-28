import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatUnits } from 'ethers'; // Direct import from ethers v6

// Styled components
const Container = styled.div`
  background: #1e1e1e;
  color: #f1f1f1;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const MetricContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`;

const MetricLabel = styled.span`
  color: #9fa8da;
`;

const MetricValue = styled.span`
  color: #cddc39;
  font-weight: bold;
`;

// Replace with actual metric types
type NetworkMetric = {
  latency: number;
  throughput: number;
};

type BlockchainMetric = {
  gasPrice: number;
  blockTime: number;
};

const PerformanceMonitor = () => {
  const [networkMetrics, setNetworkMetrics] = useState<NetworkMetric>({ latency: 0, throughput: 0 });
  const [blockchainMetrics, setBlockchainMetrics] = useState<BlockchainMetric>({ gasPrice: 0, blockTime: 0 });

  useEffect(() => {
    // Simulated metrics for the purpose of demonstration
    // In a real application, you would get this data from monitoring services or APIs
    const interval = setInterval(() => {
      setNetworkMetrics({
        latency: Math.random() * 100, // Mock latency in milliseconds
        throughput: Math.random() * 1000, // Mock throughput in kb/s
      });

      type BlockchainMetric = {
        gasPrice: string; // Change this to string if you want the formatted value as a string
        blockTime: number;
      };
    }, 5000); // Update every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h2>Network Metrics</h2>
      <MetricContainer>
        <MetricLabel>Latency:</MetricLabel>
        <MetricValue>{networkMetrics.latency.toFixed(2)} ms</MetricValue>
      </MetricContainer>
      <MetricContainer>
        <MetricLabel>Throughput:</MetricLabel>
        <MetricValue>{networkMetrics.throughput.toFixed(2)} kb/s</MetricValue>
      </MetricContainer>

      <h2>Blockchain Metrics</h2>
      <MetricContainer>
        <MetricLabel>Gas Price:</MetricLabel>
        <MetricValue>{blockchainMetrics.gasPrice} gwei</MetricValue>
      </MetricContainer>
      <MetricContainer>
        <MetricLabel>Block Time:</MetricLabel>
        <MetricValue>{blockchainMetrics.blockTime.toFixed(2)} seconds</MetricValue>
      </MetricContainer>
    </Container>
  );
};

export default PerformanceMonitor;
