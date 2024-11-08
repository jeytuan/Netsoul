import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import WallpaperEngine from '../components/WallpaperEngine';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Home: NextPage = () => {
  const { user } = useUser();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Netsoul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="flex flex-col items-center">
        <WallpaperEngine />

        <div className="mt-4">
          {!user && (
            <>
              <button
                onClick={handleLogin}
                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Log In
              </button>
              <button
                onClick={handleRegister}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </>
          )}
          {user && (
            <p>Welcome, {user.name}</p>
          )}
        </div>

        {showLogin && (
          <div className="mt-4 w-full flex justify-center">
            {/* Embedding Auth0 Login Panel */}
            <iframe
              src="/api/auth/login"
              className="w-full h-screen bg-gray-800"
              frameBorder="0"
              title="Login"
            />
          </div>
        )}

        {showRegister && (
          <div className="mt-4 w-full flex justify-center">
            {/* Embedding Auth0 Register Panel */}
            <iframe
              src="/api/auth/login"
              className="w-full h-screen bg-gray-800"
              frameBorder="0"
              title="Register"
            />
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-center text-lg">Music Player</p>
        {/* Insert your Music Player component here */}
      </div>
    </div>
  );
};

export default Home;
