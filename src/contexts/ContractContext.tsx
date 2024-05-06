import React, { createContext, useContext, ReactNode } from 'react';

// Assuming a simple structure for demonstration
interface Contract {
  id: string;
  status: string;
}

interface ContractContextType {
  contracts: Contract[];
}

// Create the context with an initial undefined value
const ContractContext = createContext<ContractContextType | undefined>(undefined);

// Define the props for the provider to include children
interface ContractProviderProps {
  children: ReactNode;  // This is the type for children in React
}

// Extend React.FC with specific props for clarity and type assurance
export const ContractProvider: React.FC<ContractProviderProps> = ({ children }) => {
  const contracts: Contract[] = [
    { id: '1', status: 'Active' },
    { id: '2', status: 'Pending' }
  ];

  return (
    <ContractContext.Provider value={{ contracts }}>
      {children}
    </ContractContext.Provider>
  );
};

// Hook to use the context
export const useContracts = () => {
  const context = useContext(ContractContext);
  if (context === undefined) {
    throw new Error('useContracts must be used within a ContractProvider');
  }
  return context;
};

export default ContractContext;
