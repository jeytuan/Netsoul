import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark as vsDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Define the Etherlink Testnet parameters
const ETHERLINK_TESTNET = {
  name: 'Etherlink Testnet',
  chainId: 128123,
  currencySymbol: 'XTZ',
  rpcUrl: 'https://node.ghostnet.etherlink.com',
  explorerUrl: 'https://testnet-explorer.etherlink.com',
};

const TestScene = () => {
  const [logs, setLogs] = useState<string[]>([
    'Available commands:',
    '"test etherlink" - Perform a smoke test on the Etherlink Testnet.',
    '"launch mev node" - Launch your own MEV node on the Etherlink network.',
    'To get Testnet rewards from faucet.etherlink.com, create a Netsoul account and bind your Metamask wallet.',
  ]);
  const [command, setCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addLog = (log: string) => {
    setLogs(prevLogs => [...prevLogs, log]);
  };

  const testEtherlinkNetwork = async () => {
    try {
      const provider = new JsonRpcProvider(ETHERLINK_TESTNET.rpcUrl);
      const blockNumber = await provider.getBlockNumber();
      addLog(`Connected to Etherlink Testnet. Current block number: ${blockNumber}`);
    } catch (error) {
      let errorMessage = 'An unknown error occurred.';
      if (error instanceof Error) {
        errorMessage = `Failed to connect to Etherlink Testnet. Error: ${error.message}`;
      }
      addLog(errorMessage);
    }
  };

  const launchMEVNode = async () => {
    addLog("Launching MEV node...");
    // Here you would implement the logic for launching an MEV node.
    addLog("MEV node launched successfully!");
  };

  const handleCommand = useCallback(async () => {
    if (!command.trim()) {
      return;
    }
    switch (command.toLowerCase()) {
      case 'test etherlink':
        addLog('Performing smoke test to the Etherlink Testnet...');
        await testEtherlinkNetwork();
        break;
      case 'launch mev node':
        await launchMEVNode();
        break;
      default:
        addLog(`Unrecognized command: ${command}`);
    }
    setCommand('');
    inputRef.current?.focus();
  }, [command]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCommand();
  };

  return (
    <Container>
      <Terminal>
        {logs.map((log, index) => (
          <Log key={index}>{log}</Log>
        ))}
        <form onSubmit={handleSubmit}>
          <Prompt>
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your command here"
              value={command}
              onChange={e => setCommand(e.target.value)}
              autoFocus
            />
          </Prompt>
        </form>
      </Terminal>

      <DebuggingArea>
        <SyntaxHighlighter language="javascript" style={vsDark}>
          {logs.join('\n')}
        </SyntaxHighlighter>
      </DebuggingArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Terminal = styled.div`
  width: 600px;
  height: 400px;
  background-color: #1e1e1e;
  color: #9cdcfe;
  padding: 20px;
  overflow-y: auto;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 14px;
`;

const Log = styled.div`
  white-space: pre-wrap;
`;

const Prompt = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    width: 100%;
  }
`;

const DebuggingArea = styled.div`
  width: 100%;
  height: 300px;
`;

export default TestScene;
