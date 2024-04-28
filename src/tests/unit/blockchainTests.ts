// blockchainTests.ts
import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { TestResult } from '../../types/types';  // Adjust the path if needed
import { BlockchainConfig } from '../../configs/blockchainConfigs';


export const testNetworkConnectivity = async (networkConfig: BlockchainConfig): Promise<TestResult> => {
  const provider = new JsonRpcProvider(networkConfig.rpcUrl);
  const testName = `${networkConfig.name} Network Connectivity`;

  try {
    const blockNumber = await provider.getBlockNumber();
    return {
      name: testName,
      status: 'passed',
      message: `Successfully connected to ${networkConfig.name}. Current block number: ${blockNumber}`,
    };
  } catch (error) {
    return {
      name: testName,
      status: 'failed',
      message: `Failed to connect to ${networkConfig.name}: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
};
