import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Game from '../components/Game';
import MusicPlayer from '../components/MusicPlayer';

// Dynamically import WallpaperEngine with SSR disabled
const WallpaperEngine = dynamic(() => import('../components/WallpaperEngine'), { ssr: false });

const Home: NextPage = () => {
  const wallpapers = [
    '/images/wallpapers/bigsur.png',
    '/images/wallpapers/boardWalk_arcade.png',
    '/images/wallpapers/coastal_banner.png',
    '/images/wallpapers/santaCruz.png'
  ];

  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWallpaperIndex((currentIndex) => (currentIndex + 1) % wallpapers.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [wallpapers.length]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <WallpaperEngine currentWallpaper={wallpapers[currentWallpaperIndex]} />
        <Game />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
