import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import MusicPlayer from '../components/MusicPlayer';
import React from 'react';

// Dynamically import BattleScene with SSR disabled
const BattleScene = dynamic(() => import('../components/BattleScene'), { ssr: false });

// Dynamically import RealmScene with SSR disabled
const RealmScene = dynamic(() => import('../components/RealmScene'), { ssr: false });

const Dashboard: NextPage = () => {
  const [activeScene, setActiveScene] = React.useState<string>('none');

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex-1 relative overflow-hidden">
        {/* Scene navigation buttons */}
        <div className="p-4 flex justify-center">
          <button onClick={() => setActiveScene('battle')} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Battle
          </button>
          <button onClick={() => setActiveScene('realm')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Realm 
          </button>
        </div>

        {/* Phaser game container */}
        <div id="phaser-game-container" className="flex justify-center items-center">
          {activeScene === 'battle' && <BattleScene />}
          {activeScene === 'realm' && <RealmScene />}
        </div>
      </main>

      <MusicPlayer />
    </div>
  );
};

export default Dashboard;
