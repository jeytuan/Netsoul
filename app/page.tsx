import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import MusicPlayer from '../components/MusicPlayer';
import WallpaperEngine from '../components/WallpaperEngine';

// Dynamically import Game with SSR disabled
const Game = dynamic(() => import('../components/Game'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <WallpaperEngine />
        <Game />  {/* Dynamically imported Game component */}
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
