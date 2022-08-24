import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../components/layouts/App';
import { requireAuthentication } from '../utils/app';

const App: NextPage = ({ currentUser }: any) => {
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
