import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
// Import test functions, not components
import { testTypes } from '../../src/configs/testTypes';
import { testNetworkConnectivity } from '../../src/tests/unit/blockchainTests';
import { blockchainNetworks } from '../../src/configs/blockchainConfigs';
import { testOracleIntegration } from '@/src/tests/integration/oracleTests';

const Container = styled.div`
  background: #212121;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #1de9b6;
`;

const TestButton = styled.button`
  background: #00b0ff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: #0081cb;
  }
`;

const Dropdown = styled.select`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;

const ResultsArea = styled.div`
  background: #0d47a1;
  margin-top: 20px;
  padding: 15px;
  border-radius: 4px;
`;

// Types for results from each of your test components
type TestResult = {
  name: string;
  status: 'passed' | 'failed' | 'running';
  message?: string;
};

const TestSuiteManager = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [selectedNetwork, setSelectedNetwork] = useState<string>(Object.keys(blockchainNetworks)[0]);
  const [selectedTestType, setSelectedTestType] = useState<string>(Object.keys(testTypes)[0]);

  // Reusable Function that handles running a test
  const runTest = useCallback(async (networkName: string) => {
    // Update test status to running
    setTestResults(prevResults => [
      ...prevResults,
      { name: `${networkName} Test`, status: 'running' },
    ]);

        // Retrieve network configuration and run the connectivity test
        const networkConfig = blockchainNetworks[networkName];
        const result = await testNetworkConnectivity(networkConfig);
    
        // Update test status with the result
        setTestResults(prevResults => [
          ...prevResults.filter(res => res.name !== `${networkName} Test`),
          result,
        ]);
      }, []);

  // Function to run a single network test
  const runSingleNetworkTest = useCallback(async () => {
    const networkConfig = blockchainNetworks[selectedNetwork];
    await runTest(selectedNetwork);
  }, [selectedNetwork]);  

// Function to run the selected test
const runSelectedTest = useCallback(async () => {
  switch (selectedTestType) {
    case 'networkConnectivity':
      await runTest(selectedNetwork);
      break;
    case 'oracleIntegration':
      // Assuming testOracleIntegration is properly imported and implemented
      const oracleTestResult = await testOracleIntegration('CoinGecko'); // or 'Chainlink', based on user selection
      // Update the testResults state with the result of the oracle test
      setTestResults(prevResults => [
        ...prevResults,
        oracleTestResult,
      ]);
      break;
    // Add cases for other tests here
  }
}, [selectedTestType, selectedNetwork, runTest, testOracleIntegration]); // Include all dependencies here




  // Function to trigger all network tests
  const runAllNetworkTests = useCallback(() => {
    Object.keys(blockchainNetworks).forEach(runTest);
  }, [runTest]);

  return (
    <Container>
    <Title>Test Suite Manager</Title>
    {/* Dropdown to select a network */}
    <Dropdown onChange={(e) => setSelectedNetwork(e.target.value)} value={selectedNetwork}>
      {Object.keys(blockchainNetworks).map((network) => (
        <option key={network} value={network}>{network}</option>
      ))}
    </Dropdown>

    {/* Add more buttons for other categories of tests */}
    <Dropdown onChange={(e) => setSelectedTestType(e.target.value)} value={selectedTestType}>
        {Object.entries(testTypes).map(([testKey, testName]) => (
          <option key={testKey} value={testKey}>{testName}</option>
        ))}
      </Dropdown>
      <TestButton onClick={runSelectedTest}>
        Run Test
      </TestButton>

    {/* Results Area remains the same */}
    <ResultsArea>
        {testResults.length > 0 ? (
          testResults.map((result, index) => (
            <div key={index}>
              {result.name} - Status: {result.status} {result.message && `- ${result.message}`}
            </div>
          ))
        ) : (
          <p>No test results yet. Run tests to see results here.</p>
        )}
      </ResultsArea>
    </Container>
  );
};

export default TestSuiteManager;


/**
 * 
TestSuiteManager.tsx will be the central hub for managing and orchestrating the execution of various test suites in your application. It should provide a user interface to start tests, display their progress, and aggregate results from BlockchainTester, UITester, and any other test components you create.

Here's a conceptual starting point for the TestSuiteManager.tsx component:

For TestSuiteManager.tsx to effectively orchestrate test suites:

Establish a structured data model for test cases and results.
If the test components are very complex, consider using a state management library like Redux or MobX for easier state synchronization between components.
Implement more granular control, allowing users to run individual test suites as needed.
Incorporate real-time updates as tests are being executed, potentially using a WebSocket connection if you have a backend service to run tests on the server-side.
Design a detailed view of test results, which can be expanded to show more information on a test case basis.
Ensure that this component is capable of handling asynchronous operations and updating the UI in real-time without causing performance issues.
Consider the scalability of this component, as more types of tests might be added in the future.
The TestSuiteManager will be a critical tool for your QA team, providing a clear overview of the health and quality of the application at any given time. 
It should be intuitive and provide deep insights at a glance, while also allowing users to drill down for more detailed information when needed.
 */