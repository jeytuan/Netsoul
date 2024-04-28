// src/tests/unit/oracleTests.ts
import { TestResult } from '../../types/types';
import { fetchOracleData } from '../../services/oracleServices'; // Adjust the import path as necessary

// Define what type of data you expect. This is a basic example; adjust according to actual data structure.
interface OracleData {
    price?: number; // Assuming this could be part of the data returned
    ethereum?: {
      usd: number;
    };
}

// Move the dataIsValid function here, before its usage in testOracleIntegration
const dataIsValid = (data: OracleData, oracleType: 'CoinGecko' | 'Chainlink'): boolean => {
  if (oracleType === 'CoinGecko') {
    return !!data.ethereum && typeof data.ethereum.usd === 'number';
  } else if (oracleType === 'Chainlink') {
    return typeof data.price === 'number' && data.price > 0;
  }
  return false;
};

export const testOracleIntegration = async (oracleType: 'CoinGecko' | 'Chainlink'): Promise<TestResult> => {
  try {
    const data = await fetchOracleData(oracleType); // Pass oracleType to fetch data from specific oracle
    if (dataIsValid(data, oracleType)) {
      return {
        name: `${oracleType} Integration Test`,
        status: 'passed',
        message: `${oracleType} oracle data fetched successfully.`,
      };
    } else {
      return {
        name: `${oracleType} Integration Test`,
        status: 'failed',
        message: `${oracleType} oracle data did not meet expected criteria.`,
      };
    }
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      name: `${oracleType} Integration Test`,
      status: 'failed',
      message: `Error fetching data from ${oracleType} oracle: ${errorMessage}`,
    };
  }
};
