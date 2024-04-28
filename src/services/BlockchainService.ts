// services/BlockchainService.ts

import { JsonRpcProvider, Wallet, Contract, formatUnits, ethers } from 'ethers';

// Type guard to check if error is of type Error
function isError(error: unknown): error is Error {
  return error instanceof Error;
}
  

type ContractInteractionResult = {
  success: boolean;
  data?: any;
  error?: string;
};

class BlockchainService {
  provider: JsonRpcProvider;
  signer?: Wallet;

  constructor(rpcUrl: string) {
    this.provider = new JsonRpcProvider(rpcUrl);
    this.setSigner();
  }

  setSigner() {
    const privateKey = 'your-private-key'; // Replace with your private key
    this.signer = new Wallet(privateKey, this.provider);
  }

  async getBlockNumber(): Promise<ContractInteractionResult> {
    try {
      const blockNumber = await this.provider.getBlockNumber();
      return { success: true, data: blockNumber };
    } catch (error) {
      // Ensure error is of type Error before accessing the message
      const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
      return { success: false, error: message };
    }
  }

  async getGasPrice(): Promise<ContractInteractionResult> {
    try {
        const gasPrice = (await this.provider.getFeeData()).gasPrice;

        if (gasPrice === null) {
            // Handle null case (e.g., throw an error or return a default value)
            throw new Error('Gas price not available on this network');
        }

        return { success: true, data: formatUnits(gasPrice, 'gwei') };
    } catch (error) {
      const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
      return { success: false, error: message };
    }
  }

  // Add more methods for different blockchain interactions, such as:
  // - Sending transactions
  // - Querying smart contract state
  // - Listening for events

  // Example smart contract interaction
  async getContractValue(contractAddress: string, abi: any, methodName: string, ...params: any[]): Promise<ContractInteractionResult> {
    try {
      const contract = new ethers.Contract(contractAddress, abi, this.provider);
      const data = await contract[methodName](...params);
      return { success: true, data };
    } catch (error) {

      const message = isError(error) ? error.message : 'An unknown error occurred';
      return { success: false, error: message };
    }
  }
  
}

// Export an instance of the service
// You would replace 'rpc-url-here' with the actual RPC URL of your blockchain network
const infuraUrl = 'https://mainnet.infura.io/v3/<YOUR_INFURA_PROJECT_ID>'; // Replace with your actual project ID
export const blockchainService = new BlockchainService(infuraUrl);


/**
 * 
Creating a BlockchainService.ts file in the services/ directory of your Next.js project involves setting up a service module that abstracts the blockchain interaction logic. 
This service will handle communication with the blockchain, encapsulating the logic for sending transactions, querying smart contract data, and performing any other 
blockchain operations required by your application.

This BlockchainService class provides methods that return promises for asynchronous blockchain operations, making it easier to interact with from your UI components. 
Here’s what each part does:

Set Up Provider: Establish a connection to the blockchain network.
Set Up Signer: Configure a signer for transactions that require authentication.
Block Number and Gas Price: Provide methods to fetch common blockchain data.
Smart Contract Interaction: General-purpose method for interacting with any smart contract, given its address, ABI, and the method to call.
Remember to replace 'your-private-key' and 'rpc-url-here' with actual secure data and avoid exposing private keys directly in your codebase. 
Instead, use environment variables or a secure key management system.

This service module can then be imported into your components wherever you need to interact with the blockchain, providing a clean and reusable 
interface for all blockchain operations.
 */