import Head from 'next/head';
import Navigation from '../components/Navigation';

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Our Vision - Netsoul</title>
      </Head>

      <Navigation />
      <main>
        <h1>Our Vision</h1>
        {/* Placeholder or actual content for the vision page goes here */}
      </main>
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default VisionPage;
