import { AxiosInstance } from "axios";
import { parseCookies } from "nookies";
import { API } from "../configs/axios";

class FriendService {
  private api: AxiosInstance;

  constructor() {
    this.api = API;
    const { ['justchat.access_token']: token } = parseCookies();
    this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async accept (friendId: string) {
    const { data } = await this.api.post('friends/requests/accept', { friendId });

    return data;
  }

  async refuse (friendId: string) {
    const { data } = await this.api.delete(`friends/requests/refuse/${friendId}`);

    return data;
  }

  async sendFriendRequest (params: any) {
    const { data } = await this.api.post(`friends/`, params);

    return data;
  }
}

export default FriendService;
