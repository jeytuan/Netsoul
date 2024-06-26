// Muted and unused for now, since all this tab information is on the Net-soul.com splash page


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
        <ul className="list-disc pl-5">
          {blockchainTools.map((tool, index) => (
            <li key={index} className="mb-2">
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {tool.name} - {tool.description}
              </a>
            </li>
          ))}
        </ul>

        {/* Test Page Capabilities */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Test Page Capabilities</h2>
          <p>In the Netsoul Test Playground, you can control API keys, ease fetching from different blockchain tools, and integrate these capabilities into our game environment.</p>
          <p>These features are akin to video game skills or equipable items, enriching the interactive experience of Netsoul&apos;s universe.</p>
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