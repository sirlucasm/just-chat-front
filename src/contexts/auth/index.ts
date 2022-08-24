import { createContext, useContext } from "react";
import { CreateUserParams, LoginParams } from "../../interfaces/user";

export interface AuthContextProps {
  login: ({ username, password }: LoginParams) => void;
  signUp: (params: CreateUserParams) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);
