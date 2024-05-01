// src/services/oracleService.ts

// Define an interface for expected oracle data (replace with actual structure)
interface OracleData {
  ethereum: {
    usd: number;
  };
  // Add other properties as needed
}

// Oracle configuration
const ORACLES: { [key: string]: { url: string; method: string } } = {
  CoinGecko: {
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
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
    const response = await fetch(oracleConfig.url, {
      method: oracleConfig.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      let errorMessage = 'An unknown error occurred';
      if (response.status >= 400 && response.status < 500) {
        errorMessage = 'Client-side error occurred.'; // Potential for more specific handling based on status code
      } else if (response.status >= 500) {
        errorMessage = 'Server-side error occurred.';
      }
      throw new Error(`Error fetching data from ${oracleType}: ${errorMessage}`);
    }

    const data = await response.json();
    // You may want to format or process this data further before returning
    return data;
  } catch (error) {
    // It's important to ensure that the error is an instance of Error before trying to access its 'message' property
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`fetchOracleData error with ${oracleType}:`, message);
    throw new Error(message);
  }
};

