import { IUser } from "./user";

export enum FriendStatus {
  PENDING='pending',
  FRIENDS='friends',
  BLOCKED='blocked'
}

export interface IAcceptOrRefuseRequest {
  status?: FriendStatus;
  friendId: string;
}

export interface IFriend {
  _id: string;
  status: FriendStatus;
  recipient: IUser;
  requester: IUser;
}
