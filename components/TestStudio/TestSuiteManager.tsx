import React, { useState, useCallback } from 'react';
import styles from './TestSuiteManager.module.css';  // Import the CSS module

// Import test functions, not components
import { testTypes } from '../../src/configs/testTypes';
import { testNetworkConnectivity } from '../../src/tests/unit/blockchainTests';
import { blockchainNetworks } from '../../src/configs/blockchainConfigs';
import { testOracleIntegration } from '@/tests/integration/oracleTests';

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

  // Function to run the selected test
  const runSelectedTest = useCallback(async () => {
    switch (selectedTestType) {
      case 'networkConnectivity':
        await runTest(selectedNetwork);
        break;
      case 'oracleIntegration':
        const oracleTestResult = await testOracleIntegration('CoinGecko', 'Etherlink');
        setTestResults(prevResults => [
          ...prevResults,
          oracleTestResult,
        ]);
        break;
      // Add cases for other tests here
    }
  }, [selectedTestType, selectedNetwork, runTest, testOracleIntegration]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Test Suite Manager</h1>
      <select className={styles.dropdown} onChange={(e) => setSelectedNetwork(e.target.value)} value={selectedNetwork}>
        {Object.keys(blockchainNetworks).map((network) => (
          <option key={network} value={network}>{network}</option>
        ))}
      </select>

      <select className={styles.dropdown} onChange={(e) => setSelectedTestType(e.target.value)} value={selectedTestType}>
        {Object.entries(testTypes).map(([testKey, testName]) => (
          <option key={testKey} value={testKey}>{testName}</option>
        ))}
      </select>

      <button className={styles.testButton} onClick={runSelectedTest}>Run Test</button>

      <div className={styles.resultsArea}>
        {testResults.length > 0 ? (
          testResults.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              {result.name} - Status: {result.status} {result.message && `- ${result.message}`}
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No test results yet. Run tests to see results here.</p>
        )}
      </div>
    </div>
  );
};

export default TestSuiteManager;
