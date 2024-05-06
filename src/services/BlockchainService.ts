// services/BlockchainService.ts

import { JsonRpcProvider, Wallet, Contract, formatUnits, ethers, ContractFactory } from 'ethers';
import solc from 'solc'; // Make sure to install solc if not already installed

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
  private provider: JsonRpcProvider;
  private signer?: Wallet;

  constructor(rpcUrl: string, privateKey: string) {
    this.provider = new JsonRpcProvider(rpcUrl);
    this.signer = new Wallet(privateKey, this.provider);
  }

  async compileSolidity(sourceCode: string): Promise<ContractInteractionResult> {
    try {
      const input = {
        language: 'Solidity',
        sources: {
          'contract.sol': {
            content: sourceCode,
          },
        },
        settings: {
          outputSelection: {
            '*': {
              '*': ['*'],
            },
          },
        },
      };
      const output = JSON.parse(solc.compile(JSON.stringify(input)));
      return { success: true, data: output };
    } catch (error) {
      return { success: false, error: isError(error) ? error.message : "Compilation failed" };
    }
  }

  async deployContract(bytecode: string, abi: any): Promise<ContractInteractionResult> {
    if (!this.signer) {
      return { success: false, error: "Signer not set" };
    }
    try {
      const contractFactory = new ContractFactory(abi, bytecode, this.signer);
      const contract = await contractFactory.deploy();
      // Wait for the deployment transaction to be mined (assuming a method exists)
      // await someMethodToWaitForDeployment(contractFactory); 
      // Access the contract address after successful deployment
      const contractAddress = await contract.getAddress();
      return { success: true, data: contractAddress };
    } catch (error) {
      return { success: false, error: isError(error) ? error.message : "Deployment failed" };
    }
  }
  
  

  async simulateTransaction(bytecode: Buffer): Promise<ContractInteractionResult> {
    // Placeholder for actual simulation logic
    return { success: true, data: "Simulation successful" };
  }

  async getBlockNumber(): Promise<ContractInteractionResult> {
    try {
      const blockNumber = await this.provider.getBlockNumber();
      return { success: true, data: blockNumber };
    } catch (error) {
      return { success: false, error: isError(error) ? error.message : 'An unknown error occurred' };
    }
  }

  async getGasPrice(): Promise<ContractInteractionResult> {
    try {
      const feeData = await this.provider.getFeeData(); // Updated method to get fee data
      return { success: true, data: formatUnits(feeData.gasPrice!, 'gwei') }; // Use `!` to assert non-null
    } catch (error) {
      return { success: false, error: isError(error) ? error.message : 'An unknown error occurred' };
    }
  }

  async getContractValue(contractAddress: string, abi: any, methodName: string, params: any[]): Promise<ContractInteractionResult> {
    try {
      const contract = new Contract(contractAddress, abi, this.signer || this.provider);
      const data = await contract[methodName](...params);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: isError(error) ? error.message : 'An unknown error occurred' };
    }
  }
}

// Export an instance of the service
const rpcUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'; // Replace with actual project ID
const privateKey = process.env.PRIVATE_KEY || 'your-private-key'; // IMPORTANT: Use environment variable or secure storage in production
export const blockchainService = new BlockchainService(rpcUrl, privateKey);



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