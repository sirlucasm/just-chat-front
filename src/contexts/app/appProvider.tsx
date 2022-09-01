import { useState } from "react"
import { AppContext } from "."
import { UserModal } from "../../components/ui/UserModal";
import { IUser } from "../../interfaces/user";

export const AppProvider = ({ children }) => {
  const [openedChat, setOpenedChat] = useState<any>({});
  const [openUserModal, setOpenUserModal] = useState(false);
  const [userSelected, setUserSelected] = useState<IUser | undefined>();

  const handleOpenChat = (chat: any) => setOpenedChat(old => old._id === chat._id ? {} : chat);

  const handleOpenUserModal = (user: IUser) => {
    setUserSelected(user);
    setOpenUserModal(true);
  }
  const handleCloseUserModal = () => {
    setOpenUserModal(false);
    setUserSelected(undefined);
  }

  return (
    <AppContext.Provider
      value={{
        openedChat,
        handleOpenChat,
        openUserModal,
        handleOpenUserModal,
        handleCloseUserModal,
        userSelected
      }}
    >
      { children }
      {
        !!userSelected && <UserModal
          open={openUserModal}
          handleClose={handleCloseUserModal}
          user={userSelected}
        />
      }
    </AppContext.Provider>
  )
}
