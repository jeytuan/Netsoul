import axios from 'axios';

// Define an interface for expected oracle data
interface OracleData {
  ethereum: {
    usd: number;
    usd_24h_change?: number;
  };
  gasPrice?: number;
}

// Oracle configuration
const ORACLES: { [key: string]: { url: string; method: string } } = {
  CoinGecko: {
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true',
    method: 'GET',
  },
  Chainlink: {
    url: 'https://chainlink-api-url.com/getPrice', // Replace with actual Chainlink API endpoint
    method: 'GET', // This might change based on the actual API requirements
  },
};

export const fetchOracleData = async (oracleType: 'CoinGecko' | 'Chainlink'): Promise<OracleData> => {
  const oracleConfig = ORACLES[oracleType];

  try {
    const response = await axios({
      url: oracleConfig.url,
      method: oracleConfig.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;

    // Process and return the data in the expected format
    if (oracleType === 'CoinGecko') {
      return {
        ethereum: {
          usd: data.ethereum.usd,
          usd_24h_change: data.ethereum.usd_24h_change,
        },
      };
    } else if (oracleType === 'Chainlink') {
      return {
        ethereum: {
          usd: data.ethereum.usd,
        },
        gasPrice: data.gasPrice,
      };
    } else {
      throw new Error('Unsupported oracle type');
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`fetchOracleData error with ${oracleType}:`, message);
    throw new Error(message);
  }
};
