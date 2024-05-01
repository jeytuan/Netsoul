import React from 'react';
import TestSuiteManager from './TestStudio/TestSuiteManager';

interface BrowserViewProps {
  view: string;  // Specify that 'view' is a string
}

const BrowserView = ({ view }: BrowserViewProps) => {
  // Decide what to render based on the 'view' prop
  const renderView = () => {
    switch (view) {
      case 'TestSuiteManager':
        return <TestSuiteManager />;
      // Add cases for other views
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
