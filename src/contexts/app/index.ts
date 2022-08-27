import { createContext, useContext } from "react";
import { CreateUserParams, LoginParams } from "../../interfaces/user";

export interface AppContextProps {
  openedChat: any;
  handleOpenChat: (chat: any) => void;
};

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);
