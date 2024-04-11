import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import MusicPlayer from '../components/MusicPlayer';
import WallpaperEngine from '../components/WallpaperEngine';

// Dynamically import DemoScene with SSR disabled
const DemoScene = dynamic(() => import('../components/DemoScene'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Login and Logout buttons */}
      <div className="p-4">
        <button onClick={() => window.location.href = '/api/auth/login'} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
        <button onClick={() => window.location.href = '/api/auth/logout'} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Log Out
        </button>
      </div>

      <main className="relative">
        <WallpaperEngine />
        <div id="phaser-game-container" className="absolute inset-0 flex justify-center items-center">
          <DemoScene />  {/* Dynamically imported DemoScene component */}
        </div>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
