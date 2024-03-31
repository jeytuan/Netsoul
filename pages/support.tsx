import Head from 'next/head';
import Navigation from '../components/Navigation';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Support - Netsoul</title>
      </Head>

      <Navigation />
      <main>
        <h1>Support</h1>
        {/* Placeholder or actual content for the support page goes here */}
      </main>
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default SupportPage;
