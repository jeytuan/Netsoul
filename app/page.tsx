import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Game from '../components/Game';
import MusicPlayer from '../components/MusicPlayer';
import WallpaperEngine from '../components/WallpaperEngine';

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
        <Game />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
