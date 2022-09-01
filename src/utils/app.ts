import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "./axios";

const redirectLoginPage = {
  redirect: {
    destination: '/',
    permanent: false
  }
};

const redirectAppPage = {
  redirect: {
    destination: '/app',
    permanent: false
  }
};

export const requireAuthentication = () => {
  return async (ctx: GetServerSidePropsContext) => {
    const ApiClient = getAPIClient(ctx);
    const { ['justchat.access_token']: token } = parseCookies(ctx);

    if (!token) return redirectLoginPage;

    const { data: currentUser } = await ApiClient.get('auth/me');

    return {
      props: {
        currentUser
      }
    };
  }
}

export const redirectAuthenticated = () => {
  return async (ctx: GetServerSidePropsContext) => {
    const { ['justchat.access_token']: token } = parseCookies(ctx);

    if (token) return redirectAppPage;

    return { props: {} };
  }
}
