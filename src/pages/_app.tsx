import '../styles/fonts.css'
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globals';
import { SWRConfig } from 'swr';
import { API } from '../configs/axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/auth/authProvider';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: async (resource, init) => API(resource, init).then(res => res.data)
      }}
    >
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp
