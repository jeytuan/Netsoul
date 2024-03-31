import Head from 'next/head';
import Navigation from '../components/Navigation';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Test - Netsoul</title>
      </Head>

      <Navigation />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Blockchain Playground</h1>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Avatars</h2>
          {/* Placeholder for Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Avatar cards or components go here */}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Quests & Hackathons</h2>
          {/* Placeholder for Quests & Hackathons */}
          <div>
            {/* List or grid of quests and hackathons */}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-3">Blockchain Interactions</h2>
          {/* Placeholder for Blockchain interactions */}
          <div className="flex flex-wrap">
            {/* Interactive elements or information about Solana, SKALE, Chainlink, etc. */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestPage;
