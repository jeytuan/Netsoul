
public/
├─ contracts/
│  ├─ access/
│  │  ├─ Roles.sol  # Defines all roles and permissions
│  │  └─ AccessControlManagement.sol  # Handles role assignments and revocations
│  ├─ security/
│  │  └─ SecurityFeatures.sol  # Contains ReentrancyGuard and other security mechanisms
│  ├─ functions/
│  │  ├─ FinancialOperations.sol  # Contains all financial-related functions
│  │  └─ OperationalSettings.sol  # Manages settings only the CEO can change
│  ├─ events/
│  │  └─ ContractEvents.sol  # Defines all the events the contract emits
│  └─ BankOfPantheon.sol  # The main contract that imports and uses all the above
├─ images/
└─ BUILDME.md


First Bank of Pantheon Smart Contract System
|
|-- Roles
|   |-- DEFAULT_ADMIN_ROLE
|   |   |-- Permissions: Can manage other roles, assign or revoke access
|   |
|   |-- CEO (Chief Executive Officer)
|   |   |-- Permissions: Change operational settings, strategic oversight
|   |
|   |-- CFO (Chief Financial Officer)
|   |   |-- Permissions: Handle financial operations, minting, and token management
|   |
|   |-- Angel
|   |   |-- Permissions: Oversee lower-level operational functions, assist in audits
|   |
|   |-- Archangel
|       |-- Permissions: Supervise critical operations, intervene in emergencies
|
|-- Functions
|   |-- Financial Operations
|   |   |-- mintTokens(address to, uint256 amount)
|   |   |   |-- Access: CFO, Archangel
|   |   |   |-- Description: Mint new tokens to a specified address
|   |
|   |   |-- transferFunds(address to, uint256 amount)
|   |       |-- Access: CFO, Archangel
|   |       |-- Description: Transfer funds to another address
|   |
|   |-- Operational Settings
|   |   |-- changeOperationalSetting(uint256 newSetting)
|   |       |-- Access: CEO
|   |       |-- Description: Adjust operational parameters of the contract
|   |
|   |-- Angel and Archangel Functions
|       |-- conductAudit()
|       |   |-- Access: Angel
|       |   |-- Description: Perform routine checks and balances
|       |
|       |-- divineIntervention(uint256 eventId)
|           |-- Access: Archangel
|           |-- Description: Execute high-level interventions in game operations
|
|-- Security Features
|   |-- ReentrancyGuard
|   |   |-- Description: Prevents reentrancy attacks on financial functions
|   |
|   |-- Multi-Signature Requirements
|       |-- Description: Requires signatures from both CEO and CFO for critical operations
|
|-- Access Control Management
|   |-- addRole(address account, bytes32 role)
|   |   |-- Access: DEFAULT_ADMIN_ROLE
|   |   |-- Description: Assign a new role to an account
|   |
|   |-- removeRole(address account, bytes32 role)
|       |-- Access: DEFAULT_ADMIN_ROLE
|       |-- Description: Remove a role from an account
|
|-- Events
    |-- RoleAssigned(address account, bytes32 role)
    |-- RoleRevoked(address account, bytes32 role)
    |-- TokensMinted(address to, uint256 amount)
    |-- OperationalSettingChanged(uint256 newSetting)
    |-- AuditConducted(address auditor)
    |-- DivineInterventionExecuted(uint256 eventId, address archangel)


