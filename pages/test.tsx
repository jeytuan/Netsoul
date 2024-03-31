import Head from 'next/head';
import Navigation from '../components/Navigation';

const blockchainTools = [
  { name: 'Web3.js', description: 'Interact with Ethereum blockchain', link: 'https://web3js.readthedocs.io/' },
  { name: 'Ethers.js', description: 'A complete Ethereum library and wallet implementation', link: 'https://docs.ethers.io/v5/' },
  { name: 'Chainlink', description: 'Decentralized oracle network', link: 'https://docs.chain.link/' },
  { name: 'The Graph', description: 'Query blockchain data efficiently with GraphQL', link: 'https://thegraph.com/docs/en/' },
  { name: 'CoinGecko API', description: 'Comprehensive cryptocurrency data API', link: 'https://www.coingecko.com/en/api/documentation' },
  { name: 'Alpaca Finance APIs', description: 'Trading APIs for stocks and crypto', link: 'https://alpaca.markets/docs/api-documentation/' },
  { name: 'Moralis', description: 'Unified platform for building dApps', link: 'https://moralis.io/' }
];

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Test - Netsoul</title>
      </Head>

      <Navigation />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Blockchain Technology Playground</h1>
        
        {/* Blockchain Tools List */}
        {/* ...existing list rendering... */}

        {/* Implementation Considerations Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Implementation Considerations</h2>
          <p>Some of these services might require you to sign up and obtain an API key.</p>
          <p>Be aware of Cross-Origin Resource Sharing (CORS) policies when making API requests from the client side.</p>
          <p>For secure API key usage and overcoming CORS, consider using serverless functions in Vercel or similar platforms.</p>
          <p>If using libraries like Web3.js or Ethers.js in a React project, you might want to create custom hooks for reusability and cleaner code.</p>
        </section>

        {/* Earning Retro Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Earning Retro in Netsoul</h2>
          <p>Earn Retro by exploring blockchain apps. Discovering a technology adds to your Wiki, earning a small amount of Retro.</p>
          <p>Greater rewards come from investing, funding, testing, staking, and contributing to open-source projects.</p>
          {/* Further mechanics or detailed descriptions can go here */}
        </section>

      </main>
    </div>
  );
};

export default TestPage;