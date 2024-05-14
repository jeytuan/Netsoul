import { TestResult } from '../../types/types';
import { fetchOracleData } from '../../services/oracleServices';

interface OracleData {
  ethereum: {
    usd: number;
    usd_24h_change?: number;  // Optional since it might not be provided by all oracles
  };
  gasPrice?: number;  // Assuming Chainlink might return this or similar
}


const dataIsValid = (data: OracleData, oracleType: 'CoinGecko' | 'Chainlink'): boolean => {
  if (oracleType === 'CoinGecko') {
    return data.ethereum?.usd !== undefined && typeof data.ethereum.usd === 'number';
  } else if (oracleType === 'Chainlink') {
    return data.gasPrice !== undefined && typeof data.gasPrice === 'number';
  }
  return false;
};

export const testOracleIntegration = async (
  oracleType: 'CoinGecko' | 'Chainlink',
  networkName: string
): Promise<TestResult> => {
  try {
    const data = await fetchOracleData(oracleType); // Assume this fetches all necessary data based on `oracleType`
    if (dataIsValid(data, oracleType)) {
      const priceChange = data.ethereum?.usd_24h_change?.toFixed(2) || 'N/A';
      const gasPrice = data.gasPrice?.toFixed(2) || 'N/A';
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
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return {
      name: `${networkName} ${oracleType} Integration Test`,
      status: 'failed',
      message: `${networkName}: Error fetching data from ${oracleType} oracle: ${errorMessage}`,
    };
  }
};
