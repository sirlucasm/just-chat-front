export interface LoginParams {
  username: string;
  password: string;
}

export interface CreateUserParams {
  name: string;
  username: string;
  password: string;
}

export interface IUser {
  name: string;
  username: string;
  password: string;
  avatarURL: string;
}