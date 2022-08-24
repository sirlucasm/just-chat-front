import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { API, CommonHeaderProperties } from "../configs/axios";
import UserService from "../services/UserService";

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
    const { ['justchat.access_token']: token } = parseCookies(ctx);

    if (!token) return redirectLoginPage;

    API.defaults.headers = {
      Authorization: `Bearer ${token}`
    } as CommonHeaderProperties;

    const currentUser = await UserService.me();
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
