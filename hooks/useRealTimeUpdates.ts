// hooks/useRealTimeUpdates.ts

import { useState, useEffect, useRef, useCallback } from 'react';

type MessageHandler = (message: any) => void;

function useRealTimeUpdates(webSocketUrl: string, onMessage: MessageHandler) {
  const [isConnected, setIsConnected] = useState(false);
  const webSocketRef = useRef<WebSocket | null>(null);

  // Function to initialize the WebSocket connection
  const connect = useCallback(() => {
    if (webSocketRef.current) {
      webSocketRef.current.close();
    }

    const webSocket = new WebSocket(webSocketUrl);
    webSocketRef.current = webSocket;

    webSocket.onopen = () => {
      setIsConnected(true);
    };

    webSocket.onclose = () => {
      setIsConnected(false);
    };

    webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
    };

    webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      onMessage(message);
    };
  }, [webSocketUrl, onMessage]);

  // Effect to manage the WebSocket lifecycle
  useEffect(() => {
    connect();

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
    };
  }, [connect]);

  // Provide a method to send messages
  const sendMessage = useCallback(
    (message: any) => {
      if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
        webSocketRef.current.send(JSON.stringify(message));
      }
    },
    []
  );

  return { isConnected, sendMessage };
}

export default useRealTimeUpdates;


/**
 * 
Creating a custom React hook for handling WebSocket connections is a great way to abstract the logic for real-time communication. 
Below is a simple implementation of a useRealTimeUpdates.ts hook that you could use to connect to a WebSocket server and receive messages.

To use this hook, you would call it within a React component, providing the WebSocket URL and a handler function that should be called whenever a message is received:

typescript
Copy code
// Example of using the useRealTimeUpdates hook in a component

import React from 'react';
import useRealTimeUpdates from './hooks/useRealTimeUpdates';

const RealTimeComponent = () => {
  const webSocketUrl = 'wss://your-websocket-server.com';

  const handleWebSocketMessage = (message: any) => {
    // Handle the received message
    console.log('Received WebSocket message:', message);
  };

  const { isConnected, sendMessage } = useRealTimeUpdates(webSocketUrl, handleWebSocketMessage);

  // Use `sendMessage` to send a message through the WebSocket
  // Example: sendMessage({ type: 'ping' });

  return (
    <div>
      WebSocket Status: {isConnected ? 'Connected' : 'Disconnected'}
      {/* Display real-time data or controls for sending messages }
      </div>
    );
  };
  
  export default RealTimeComponent;
  This hook provides a clear interface for WebSocket communication and encapsulates the connection management, making it reusable across different components that require real-time updates.
 
 
  */