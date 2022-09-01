import { createContext, useContext } from "react";
import { CreateUserParams, IUser, LoginParams } from "../../interfaces/user";

export interface AppContextProps {
  openedChat: any;
  handleOpenChat: (chat: any) => void;
  openUserModal: boolean;
  handleOpenUserModal(user: IUser): void;
  handleCloseUserModal(): void;
  userSelected: IUser | undefined;
};

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);
