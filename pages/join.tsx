import Head from 'next/head';
import Navigation from '../components/Navigation';

const JoinPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Join - Netsoul</title>
      </Head>

      <Navigation />
      
      {/* Wallpaper Section */}
      <div className="relative w-full min-h-screen">
        <img
          src="/images/wallpapers/bigsur.png"
          alt="Bigsur Wallpaper"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <main className="p-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Join Us</h1>
            {/* Additional content for the join page goes here */}
          </main>
          {/* Footer or additional components can go here */}
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
