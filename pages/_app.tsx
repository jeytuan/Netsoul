import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import the setupMonaco function
      import('../src/utils/monacoConfig').then(({ setupMonaco }) => setupMonaco());
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
