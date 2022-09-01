import { AxiosInstance } from "axios";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { API } from "../configs/axios"
import { LoginParams } from "../interfaces/user";

class UserService {
  private api: AxiosInstance;

  constructor() {
    this.api = API;
    const { ['justchat.access_token']: token } = parseCookies();
    this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async login (params: LoginParams) {
    const { data } = await this.api.post('auth/login', params);
    setCookie(null, 'justchat.access_token', data.token);

    return data;
  }

  async create (params: LoginParams) {
    const { data } = await this.api.post('users', params);
    setCookie(null, 'justchat.access_token', data.token);

    return data;
  }

  async me () {
    const { data } = await this.api.get('auth/me');
    return data;
  }

  async search (searchQuery: string) {
    const { data } = await this.api.get('users/search', { params: { s: searchQuery } });
    return data;
  }

  async logout(): Promise<void> {
    destroyCookie(null, 'justchat.access_token');
  }
}

export default UserService;
