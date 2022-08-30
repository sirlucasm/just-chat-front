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
