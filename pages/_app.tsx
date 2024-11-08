import 'leaflet/dist/leaflet.css';
import { AppProps } from 'next/app';
import '../app/globals.css';
import { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import the setupMonaco function
      import('../src/utils/monacoConfig').then(({ setupMonaco }) => setupMonaco());
    }
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
