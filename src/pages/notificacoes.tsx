import type { NextPage } from 'next';
import Head from 'next/head';
import { requireAuthentication } from '../utils/app';

const Notifications: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Notifications</title>
      </Head>

      <h2>Notifications</h2>
    </div>
  )
}

export default Notifications;

export const getServerSideProps = requireAuthentication();
