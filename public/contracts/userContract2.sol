// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserContract2 {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}


/**

Usage and Deployment
Deployment: These contracts can be compiled and deployed using Remix, Truffle, or Hardhat, depending on your preference and the rest of your project setup.
Integration: Once deployed, you can interact with these contracts through your web3 interface in your SmartContractWorkshop, using either direct web3 calls or through a library like ethers.js (assuming the import issues are resolved).
Tips for Further Development
Testing and Safety: Before using these contracts in a production environment or with real value, ensure they are thoroughly tested. This includes unit tests, integration tests, and possibly formal verification.
Versioning: Make sure the Solidity version in the contracts matches the compiler settings in your development environment. Adjust as necessary depending on your configuration and tooling.
These contracts are now ready to be added to your public/contracts/ directory for use within your project as described in your project structure.


 */