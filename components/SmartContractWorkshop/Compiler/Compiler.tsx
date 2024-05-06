import React, { useState } from 'react';
import solc from 'solc';

export interface CompilerProps {
  sourceCode: string;
}

export interface CompilationResult {
  success: boolean;
  output?: any;
  errors?: any[];
  error?: string;
}

export const compile = async (sourceCode: string): Promise<CompilationResult> => {
  console.log('Compiling code...');
  const input = {
    language: 'Solidity',
    sources: {
      'Contract.sol': {
        content: sourceCode
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  return new Promise((resolve, reject) => {
    try {
      const compiledOutput = JSON.parse(solc.compile(JSON.stringify(input)));
      if (compiledOutput.errors && compiledOutput.errors.length > 0) {
        resolve({ success: false, errors: compiledOutput.errors });
      } else {
        const contracts = compiledOutput.contracts['Contract.sol']['Contract'];
        resolve({ success: true, output: contracts });
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occurred";
      resolve({ success: false, error: message });
    }
  });
};

const Compiler: React.FC<CompilerProps> = ({ sourceCode }) => {
  const [output, setOutput] = useState<CompilationResult | null>(null);

  return (
    <div>
      <button onClick={() => compile(sourceCode).then(setOutput)}>Compile Contract</button>
      {output && (
        <div>
          <h3>Compilation Result:</h3>
          {output.success ? (
            <pre>{JSON.stringify(output.output, null, 2)}</pre>
          ) : (
            <pre>{JSON.stringify(output.errors || output.error, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Compiler;





/**
 * Explanation:
Input Structure: Solidity compiler expects a specific JSON input format which includes language, sources, and settings. You configure it to return everything it can ('*': ['*']).
Compilation: The solc.compile function is synchronous and expects a JSON string. It returns a JSON string which must be parsed.
Error Handling: The compiler output can include errors, which should be checked and handled appropriately.

3. Improvements and Considerations:
Asynchronous Compilation: If using a remote API or a more complex local setup, consider making the compilation process asynchronous and handle it with promises or async/await.
Security: Be cautious with user-supplied input, as compiling code can expose your system to security risks. Always validate and sanitize inputs rigorously.
User Interface: Provide meaningful feedback to the user about the compilation process, including any errors or the successful creation of the bytecode and ABI.

Conclusion:
This setup provides a basic framework for integrating a Solidity compiler into your application. Depending on your actual deployment, user needs, and the environment (local vs. production), you may need to adjust configurations, especially around security and performance.
 * 
 */