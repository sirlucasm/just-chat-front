import type { NextPage } from 'next';
import Head from 'next/head';
import { requireAuthentication } from '../utils/app';

const Settings: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>

      <h2>settings</h2>
    </div>
  )
}

export default Settings

export const getServerSideProps = requireAuthentication();
