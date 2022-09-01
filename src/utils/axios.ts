import axios, { HeadersDefaults } from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const getAPIClient = (ctx?: GetServerSidePropsContext) => {
  const { ['justchat.access_token']: token } = parseCookies(ctx);
  const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

  if (token) {
    API.defaults.headers = { Authorization: `Bearer ${token}` } as CommonHeaderProperties;
  }

  return API;
}

export const generateAuthHeader = (tokenProvided?: string) => ({ headers: { Authorization: `Bearer ${tokenProvided}`} });
