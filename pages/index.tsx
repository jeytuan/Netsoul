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
      <main className="relative">
        <WallpaperEngine />
        <div id="phaser-game-container" className="absolute top-0 left-0 w-full h-full">
          <DemoScene />  {/* Dynamically imported DemoScene component */}
        </div>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
