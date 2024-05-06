/**
 * contractHelpers.ts
 * Utility functions for Ethereum transactions and conversions without full ethers.js utilities.
 */

/**
 * Prepares transaction data for sending a transaction.
 * @param to The recipient address.
 * @param value The amount to send in ether (will need conversion to wei).
 * @param data The data to send.
 * @returns A transaction object.
 */
export const prepareTransaction = (to: string, value: string, data: string = '') => {
    return {
      to,
      value: etherToWei(value),  // Convert ether to wei for the transaction value
      data
    };
  };
  
  /**
   * Converts Ether to Wei.
   * @param ether The ether amount as a string.
   * @returns The equivalent in wei as a string.
   */
  export const etherToWei = (ether: string): string => {
    const weiPerEther = 1e18;  // One ether is 10^18 wei
    return (parseFloat(ether) * weiPerEther).toString();
  };
  
  /**
   * Converts Wei to Ether.
   * @param wei The wei amount as a string.
   * @returns The equivalent in ether as a string.
   */
  export const weiToEther = (wei: string): string => {
    const weiPerEther = 1e18;  // One ether is 10^18 wei
    return (parseFloat(wei) / weiPerEther).toString();
  };
  
  /**
   * Parses a transaction receipt to extract confirmation and log information.
   * @param receipt The transaction receipt.
   * @returns Parsed receipt information including status, gas used, and logs.
   */
  export const parseTransactionReceipt = (receipt: any) => {
    return {
      status: receipt.status,
      gasUsed: receipt.gasUsed.toString(),
      logs: receipt.logs.map((log: any) => ({
        address: log.address,
        data: log.data,
        topics: log.topics,
      }))
    };
  };
  

  /**
   * Explanation
Transaction Preparation: This function now converts value from Ether to Wei within the function itself using a basic conversion function, avoiding any reliance on ethers for this task.
Ether and Wei Conversions: These functions are purely JavaScript and do not depend on any third-party library. They handle the basic mathematical conversion between Ether and Wei.
Parsing Transaction Receipts: This function remains unchanged but assumes that the structure of receipt is known and consistent. You might adjust this function depending on the actual structure of receipts your application receives.
Integration
You can use these functions in your application wherever you need to prepare transactions, convert values, or parse receipts. Since they no longer rely on the problematic parts of the ethers library for basic operations, you should not encounter the same import or type issues.

This setup allows you to maintain essential functionalities while sidestepping the complications you've faced with ethers. If you need more complex functionalities later, such as signing transactions or interacting directly with the blockchain, consider isolating those operations in specific parts of your application where ethers can be imported and used successfully.
   * 
   */