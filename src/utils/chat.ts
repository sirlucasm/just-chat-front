import moment from "moment";

export const getCurrentChatInfo = (chat: any, currentUser: any) => {
  const { friend, room } = chat;
  if (friend) {
    if (friend.recipient._id === currentUser._id) return friend.requester;
    return friend.recipient;
  }
  return room;
}

export const formatMessageSentDate = (timestamp: string | number) => {
  return moment(timestamp).calendar();
}
