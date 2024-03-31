import Head from 'next/head';
import Navigation from '../components/Navigation';

const JoinPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Join - Netsoul</title>
      </Head>

      <Navigation />
      <main>
        <h1>Join Us</h1>
        {/* Additional content for the join page goes here */}
      </main>
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default JoinPage;
