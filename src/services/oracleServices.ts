// src/services/oracleService.ts

// Oracle configuration
const ORACLES = {
  CoinGecko: {
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
    method: 'GET'
  },
  Chainlink: {
    url: 'https://chainlink-api-url.com/getPrice', // Replace with actual Chainlink API endpoint
    method: 'GET' // This might change based on the actual API requirements
  }
};

export const fetchOracleData = async (oracleType: 'CoinGecko' | 'Chainlink'): Promise<any> => {
  const oracleConfig = ORACLES[oracleType];

  try {
    const response = await fetch(oracleConfig.url, {
      method: oracleConfig.method,
      headers: {
        // Add required headers here, if any
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from ${oracleType}: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // You may want to format or process this data further before returning
  } catch (error) {
    // It's important to ensure that the error is an instance of Error before trying to access its 'message' property
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`fetchOracleData error with ${oracleType}:`, message);
    throw new Error(message);
  }
};
