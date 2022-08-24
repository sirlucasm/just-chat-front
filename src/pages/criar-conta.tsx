import type { NextPage } from 'next';
import Head from 'next/head';
import { SignUpLayout } from '../components/layouts/Auth/SignUp';
import { redirectAuthenticated } from '../utils/app';

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SignUp</title>
      </Head>

      <SignUpLayout />
    </div>
  )
}

export default SignUp;

export const getServerSideProps = redirectAuthenticated();
