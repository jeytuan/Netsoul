import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import MusicPlayer from '../components/MusicPlayer';
import WallpaperEngine from '../components/WallpaperEngine';
import React, { useState } from 'react';

// Dynamically import DemoScene with SSR disabled
const DemoScene = dynamic(() => import('../components/DemoScene'), { ssr: false });

// Dynamically import RealmScene with SSR disabled
const RealmScene = dynamic(() => import('../components/RealmScene'), { ssr: false });

const Home: NextPage = () => {
  const [activeScene, setActiveScene] = useState('demo');

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Scene navigation buttons */}
      <div className="p-4 flex justify-center">
        {/* Login Button */}
        <button onClick={() => window.location.href = '/api/auth/login'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Log In
        </button>
        <button onClick={() => setActiveScene('demo')} className={`mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeScene === 'demo' ? 'opacity-75' : ''}`}>
          Battle
        </button>
        <button onClick={() => setActiveScene('realm')} className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${activeScene === 'realm' ? 'opacity-75' : ''}`}>
          Realm 
        </button>
      </div>

      <main className="flex-1 relative overflow-hidden">
        {/* Adjust the height of WallpaperEngine to your preference */}
        <WallpaperEngine />
        {/* Phaser game container fitting right under the wallpaper */}
        <div id="phaser-game-container" className="flex justify-center items-center">
          {activeScene === 'demo' ? <DemoScene /> : <RealmScene />}
        </div>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
