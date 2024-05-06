import React, { useEffect } from 'react';
import Editor from "@monaco-editor/react";
import { setupMonaco } from '@/utils/monacoConfig'; // Importing setupMonaco for possible static use

// Define TypeScript interface for component props
interface ContractEditorProps {
  initialCode: string;    // Assuming initialCode should be a string
  onCodeChange: (newValue: string) => void;  // Assuming onCodeChange is a function that receives a string
  className?: string;  // Optional className for styling
}

const ContractEditor: React.FC<ContractEditorProps> = ({ initialCode, onCodeChange, className }) => {
  useEffect(() => {
    // Dynamically load the Monaco config to not impact initial page load
    import('@/utils/monacoConfig').then(monacoConfig => monacoConfig.setupMonaco());
  }, []);

  return (
    <div className={className}> {/* Apply className to the container for styling */}
      <Editor
        height="500px"
        theme="vs-dark"
        defaultLanguage="sol"
        defaultValue={initialCode}
        onChange={(value) => onCodeChange(value || '')}  // Ensure the handler is always called with a string
      />
    </div>
  );
};

export default ContractEditor;
