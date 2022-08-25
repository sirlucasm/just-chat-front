import useSWR from "swr";

export const useChatSWR = () => {
  const { data: chats, ...params } = useSWR('chats');
  return {
    chats,
    isLoading: !chats,
    ...params
  }
}
