import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { AppLayout } from '../components/layouts/App';
import { socket } from '../configs/socket';
import { requireAuthentication } from '../utils/app';

const App: NextPage = ({ currentUser }: any) => {
  useEffect(() => {
    socket.emit('user:onlineList', currentUser);
  }, [socket]);
  return (
    <>
      <Head>
        <title>JustChat: App</title>
      </Head>

      <AppLayout
        currentUser={currentUser}
      />
    </>
  )
}

export default App;

export const getServerSideProps = requireAuthentication();
