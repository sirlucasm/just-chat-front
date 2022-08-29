import type { NextPage } from 'next';
import Head from 'next/head';
import { FriendshipLayout } from '../components/layouts/Friendships';
import { requireAuthentication } from '../utils/app';

const FriendShips: NextPage = ({ currentUser }: any) => {
  return (
    <div>
      <Head>
        <title>Solicitações</title>
      </Head>

      <FriendshipLayout
        currentUser={currentUser}
      />
    </div>
  )
}

export default FriendShips;

export const getServerSideProps = requireAuthentication();
