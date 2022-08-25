import axios, { HeadersDefaults } from 'axios';
import { parseCookies } from 'nookies';

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const { ['justchat.access_token']: token } = parseCookies();
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

if (token) {
  API.interceptors.request.use(
    (config: any) => {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // API.defaults.headers = {
  //   Authorization: `Bearer ${token}`
  // } as CommonHeaderProperties;
}

export { API };
