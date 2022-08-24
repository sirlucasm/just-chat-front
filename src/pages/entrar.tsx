import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginLayout } from '../components/layouts/Auth/Login';
import { redirectAuthenticated } from '../utils/app';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginLayout />
    </>
  )
}

export default Login;

export const getServerSideProps = redirectAuthenticated();
