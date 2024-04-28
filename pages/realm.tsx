// pages/realm.tsx
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the RealmScene component without server-side rendering
const RealmSceneWithNoSSR = dynamic(() => import('../components/RealmScene'), {
  ssr: false,
});

const RealmPage = () => {
  useEffect(() => {
    console.log('RealmPage loaded');
  }, []);

  return <RealmSceneWithNoSSR />;
};

export default RealmPage;
