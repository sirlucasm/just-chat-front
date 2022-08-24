import { destroyCookie, setCookie } from "nookies";
import { API, CommonHeaderProperties } from "../configs/axios"
import { LoginParams } from "../interfaces/user";

class UserService {
  async login (params: LoginParams) {
    const { data } = await API.post('auth/login', params);
    setCookie(null, 'justchat.access_token', data.token);

    return data;
  }

  async create (params: LoginParams) {
    const { data } = await API.post('users', params);
    setCookie(null, 'justchat.access_token', data.token);

    return data;
  }

  async me () {
    const { data } = await API.get('auth/me');
    return data;
  }

  async logout(): Promise<void> {
    destroyCookie(null, 'justchat.access_token');
  }
}

export default new UserService();
