import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import BlockchainTest from '../components/TestStudio/BlockchainTest';
import UITester from '../components/TestStudio/UITester';
import PerformanceMonitor from '../components/TestStudio/PerformanceMonitor';
import TestSuiteManager from '../components/TestStudio/TestSuiteManager';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #121212;
  min-height: 100vh;
  color: #fff;
`;

const Heading = styled.h1`
  color: #81d4fa;
  margin-bottom: 30px;
`;

const TestStudio = () => {
  return (
    <>
      <Head>
        <title>Test Studio</title>
        <meta name="description" content="Test Studio for Netsoul" />
      </Head>
      <PageContainer>
        <Heading>NetSoul Test Studio</Heading>
        <TestSuiteManager />
        <BlockchainTest />
        <UITester />
        <PerformanceMonitor />
      </PageContainer>
    </>
  );
};

export default TestStudio;

/**
 * 
Great! The pages/teststudio.tsx would be the page that ties everything together into one cohesive testing environment within your application. 
This page will serve as the dashboard for your testing suite, providing access to all the individual testing components and displaying a summary of the system's overall health.

In teststudio.tsx, you'd want to:

Use <Head> to set the page's title and meta tags, improving the SEO of the page and providing relevant information to users and search engines.
Use a PageContainer styled-component to set the basic layout of the page, ensuring it aligns with the overall design system of Netsoul.
Include all the different test components that have been developed, allowing users to interact with each of them from a single page.
Provide a <Heading> to clearly identify the page and its purpose to users.
Optionally, you could also include navigation links back to other parts of the Netsoul application or dashboard.
This page becomes a powerful tool for developers and QA teams, giving them a unified interface to manage and run tests across the Netsoul platform. 
It should be intuitive and provide quick access to the entire suite of testing tools available.
 * 
 */