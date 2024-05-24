// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Roles is AccessControl {
    // Define the default admin role
    bytes32 public constant DEFAULT_ADMIN_ROLE = keccak256("DEFAULT_ADMIN_ROLE");

    // Events
    event RoleAssigned(address indexed account, bytes32 role);
    event RoleRevoked(address indexed account, bytes32 role);

    constructor() {
        // Grant the contract deployer the default admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // Function to assign roles
    function assignRole(bytes32 role, address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(role, account);
        emit RoleAssigned(account, role);
    }

    // Function to revoke roles
    function revokeRole(bytes32 role, address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(role, account);
        emit RoleRevoked(account, role);
    }

    // Modifier to check admin role
    modifier onlyAdmin() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Roles: You must have the DEFAULT_ADMIN_ROLE to perform this action");
        _;
    }
}

/*
Explanation
DEFAULT_ADMIN_ROLE: This role has permission to manage other roles, including assigning and revoking access.
Events: RoleAssigned and RoleRevoked events are emitted when roles are assigned or revoked, providing transparency for role management actions.
Constructor: The contract deployer is granted the DEFAULT_ADMIN_ROLE upon deployment.
assignRole: This function allows accounts with the DEFAULT_ADMIN_ROLE to assign roles to other accounts.
revokeRole: This function allows accounts with the DEFAULT_ADMIN_ROLE to revoke roles from other accounts.
onlyAdmin Modifier: A modifier to ensure that only accounts with the DEFAULT_ADMIN_ROLE can call certain functions.
Usage
The Roles contract can be used as a base contract to manage roles in your smart contract system.
By emitting events for role assignments and revocations, you ensure transparency and traceability of role management actions.
Next Steps
Integrate with AccessControlManagement.sol: Ensure your AccessControlManagement.sol and other contracts correctly import and use the Roles.sol contract.
Testing: Write tests to ensure the role management functions work as expected.
Environment Configuration: Ensure your .env file and other environment settings are correctly configured for deployment and testing.
By following these steps, you can manage roles and access control in your smart contract system effectively.
*/