import Head from 'next/head';
import Navigation from '../components/Navigation';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Test - Netsoul</title>
      </Head>

      <Navigation />
      <main>
        <h1>Test Page</h1>
        {/* Placeholder or actual content for the test page goes here */}
      </main>
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default TestPage;
