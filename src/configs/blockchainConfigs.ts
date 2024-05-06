// src/config/blockchainConfigs.ts
export interface BlockchainConfig {
  name: string;
  rpcUrl: string;
  chainId?: number;  // Optional, as not all networks might require it for basic tests
  explorerUrl?: string;
  currencySymbol?: string;
}

export const blockchainNetworks: Record<string, BlockchainConfig> = {
  Etherlink: {
    name: 'Etherlink',
    rpcUrl: 'https://node.ghostnet.etherlink.com',
    chainId: 128123,
    explorerUrl: 'https://testnet-explorer.etherlink.com',
  },
  Stavanger: {
    name: 'Stavanger Presto',
    rpcUrl: 'https://sn2-stavanger-rpc.eu-north-2.gateway.fm',
  },
  Skale: {
    name: 'Skale',
    rpcUrl: 'https://skale.network',
  },
  TRON: {
    name: 'TRON',
    rpcUrl: 'https://api.trongrid.io',
  },
  Chainlink: {
    name: 'Chainlink',
    rpcUrl: 'https://link.network',
  },
  CANTO: {
    name: 'CANTO',
    rpcUrl: 'https://canto.slingshot.finance',
    chainId: 7700,
    currencySymbol: 'CANTO',
    explorerUrl: 'https://www.oklink.com/canto',
  }
};
