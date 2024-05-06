import React from 'react';
import TestSuiteManager from './TestStudio/TestSuiteManager';
import Playground from './Playground/Playground'; // Import Playground

interface BrowserViewProps {
  view: string;  // Specify that 'view' is a string
}

const BrowserView = ({ view }: BrowserViewProps) => {
  const renderView = () => {
    switch (view) {
      case 'TestSuiteManager':
        return <TestSuiteManager />;
      case 'Playground':  // Add case for Playground
        return <Playground />;
      default:
        return <div>Select a node to see its content here.</div>;
    }
  };

  return (
    <div className="browser-view-container">
      {renderView()}
    </div>
  );
};

export default BrowserView;
