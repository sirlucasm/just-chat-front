import axios, { HeadersDefaults } from 'axios';
import { parseCookies } from 'nookies';

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const { ['justchat.access_token']: token } = parseCookies();
const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

if (token) {
  API.defaults.headers = {
    Authorization: `Bearer ${token}`
  } as CommonHeaderProperties;
}

const generateAuthHeader = (token: string | undefined) => ({ headers: { Authorization: `Bearer ${token}`} })

export { API, generateAuthHeader };
