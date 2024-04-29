// src/tests/unit/oracleTests.ts
import { TestResult } from '../../types/types';
import { fetchOracleData } from '../../services/oracleServices';

// Assuming the oracle returns a data structure like this:
interface OracleData {
  ethereum?: {
    usd: number;
    usd_24h_change: number;
  };
  gasPrice?: number; // Gas price in GWEI for Chainlink or another oracle
}

const dataIsValid = (data: OracleData, oracleType: 'CoinGecko' | 'Chainlink'): boolean => {
  // Implement your validation logic here
  // For example, check if the data contains the expected properties
  if (oracleType === 'CoinGecko') {
    return data.ethereum !== undefined && typeof data.ethereum.usd === 'number';
  } else if (oracleType === 'Chainlink') {
    // Replace with the validation logic for Chainlink oracle data
    return data.gasPrice !== undefined && typeof data.gasPrice === 'number';
  }

  // If the data doesn't meet your conditions, return false
  return false;
};


export const testOracleIntegration = async (
  oracleType: 'CoinGecko' | 'Chainlink',
  networkName: string
): Promise<TestResult> => {
  try {
    const data = await fetchOracleData(oracleType);
    if (dataIsValid(data, oracleType)) {
      const priceChange = data.ethereum?.usd_24h_change.toFixed(2);
      const gasPrice = data.gasPrice;
      return {
        name: `${networkName} ${oracleType} Integration Test`,
        status: 'passed',
        message: `${networkName}: ${oracleType} oracle data fetched successfully. 24h Change: ${priceChange}%, Gas Price: ${gasPrice} GWEI`,
      };
    } else {
      return {
        name: `${networkName} ${oracleType} Integration Test`,
        status: 'failed',
        message: `${networkName}: ${oracleType} oracle data did not meet expected criteria.`,
      };
    }
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      name: `${networkName} ${oracleType} Integration Test`,
      status: 'failed',
      message: `${networkName}: Error fetching data from ${oracleType} oracle: ${errorMessage}`,
    };
  }
};
