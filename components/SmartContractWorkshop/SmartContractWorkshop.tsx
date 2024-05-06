import React, { useState } from 'react';
import Editor from './ContractEditor/Editor';
import { simulate } from './Simulator/Simulator';
import MapIntegration from './NetworkMap/MapIntegration';
import ContractTemplates from '../ContractTemplates/ContractTemplates';
import styles from './SmartContractWorkshop.module.css';

// Interface for the output from the API endpoint
interface CompilationResult {
  success: boolean;
  output?: any;  // Detailed structure can depend on your solidity output
  errors?: any[];
  error?: string;
}

const SmartContractWorkshop = () => {
  const [contractCode, setContractCode] = useState<string>('');
  const [compiledCode, setCompiledCode] = useState<CompilationResult | null>(null);
  const [simulationResults, setSimulationResults] = useState<string[]>([]);

  const handleCodeChange = (newCode: string) => {
    setContractCode(newCode);
  };

  const handleCompile = async () => {
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: contractCode }),
      });
      const result: CompilationResult = await response.json();
      setCompiledCode(result);
      if (!result.success) {
        alert(`Compilation failed: ${result.error || 'See errors for more details.'}`);
      } else {
        alert('Compilation successful!');
      }
    } catch (error) {
      console.error('Error compiling the contract:', error);
      alert('Failed to compile. Check console for more details.');
    }
  };

  const handleSimulate = () => {
    if (compiledCode?.output) {
      simulate(compiledCode.output, (result: string) => {
        setSimulationResults([result]);
        alert('Simulation complete!');
      });
    }
  };

  return (
    <div className={styles.workshopContainer}>
      <h1>Smart Contract Workshop</h1>
      <ContractTemplates onSelectTemplate={setContractCode} />
      <Editor initialCode={contractCode} onCodeChange={handleCodeChange} className={styles.editor} />
      <button className={styles.button} onClick={handleCompile}>Compile Contract</button>
      {compiledCode && (
        <div>
          <button className={styles.button} onClick={handleSimulate}>Simulate Contract</button>
          <div>Compilation Output: {JSON.stringify(compiledCode)}</div>
        </div>
      )}
      {simulationResults.length > 0 && (
        <div>
          <h2>Simulation Results</h2>
          {simulationResults.map((result, index) => (
            <div key={index}>{result}</div>
          ))}
        </div>
      )}
      <MapIntegration />
    </div>
  );
};

export default SmartContractWorkshop;
