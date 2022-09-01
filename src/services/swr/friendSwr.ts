import useSWR from "swr";

export const useFriendRequestReceivedSWR = () => {
  const { data: friendRequestsReceived, ...params } = useSWR('friends/requests/received');
  return {
    friendRequestsReceived,
    isLoading: !friendRequestsReceived,
    ...params
  }
}

export const useFriendRequestSendedSWR = () => {
  const { data: friendRequestsSended, ...params } = useSWR('friends/requests/sended');
  return {
    friendRequestsSended,
    isLoading: !friendRequestsSended,
    ...params
  }
}

export const useGetFriendByUserIdSWR = (user: any) => {
  const { data: friend, ...params } = useSWR(`friends/by-user-id?userId=${user._id}`);
  return {
    friend,
    isLoading: !friend,
    ...params
  }
}
