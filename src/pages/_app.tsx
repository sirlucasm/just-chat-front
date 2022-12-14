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
import { parseCookies } from 'nookies';
import { AppProvider } from '../contexts/app/appProvider';
import { generateAuthHeader } from '../utils/axios';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const { ['justchat.access_token']: token } = parseCookies();

  return (
    <SWRConfig
      value={{
        fetcher: async (resource, init) => API(resource, {...init, ...generateAuthHeader(token)}).then(res => res.data)
      }}
    >
      <AuthProvider>
        <AppProvider>
          <GlobalStyle />
          <Component {...pageProps} />
          <Toaster position="top-right" />
        </AppProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp
