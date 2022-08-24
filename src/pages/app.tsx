import type { NextPage } from 'next';
import Head from 'next/head';
import { requireAuthentication } from '../utils/app';

const App: NextPage = ({ currentUser }: any) => {
  return (
    <>
      <Head>
        <title>JustChat: App</title>
      </Head>

      <div>
        <h2>app</h2>
      </div>
      <div>
        <p>{currentUser.name}</p>
      </div>
    </>
  )
}

export default App;

export const getServerSideProps = requireAuthentication();
