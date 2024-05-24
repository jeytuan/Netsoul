import { HardhatUserConfig } from "hardhat/types";
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv/config");
require("@typechain/hardhat");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
  },
  paths: {
    sources: "./public/contracts",
    tests: "./src/tests",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5"
  }
};

export default config;
