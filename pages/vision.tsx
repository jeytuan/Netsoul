import Head from 'next/head';
import Navigation from '../components/Navigation';

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Our Vision - Netsoul</title>
      </Head>

      <Navigation />

      {/* Wallpaper Section */}
      <div className="relative w-full min-h-screen">
        <img
          src="/images/wallpapers/coastal_banner.png"
          alt="Coastal Banner Wallpaper"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <main className="p-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Vision</h1>
            {/* Placeholder or actual content for the vision page goes here */}
          </main>
          {/* Footer or additional components can go here */}
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
