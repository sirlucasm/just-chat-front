import { API } from "../configs/axios";

class FriendService {
  async accept (friendId: string) {
    const { data } = await API.post('friends/requests/accept', { friendId });

    return data;
  }

  async refuse (friendId: string) {
    const { data } = await API.delete(`friends/requests/refuse/${friendId}`);

    return data;
  }
}

export default new FriendService();
