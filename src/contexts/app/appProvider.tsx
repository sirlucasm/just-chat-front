import { useState } from "react"
import { AppContext } from "."

export const AppProvider = ({ children }) => {
  const [openedChat, setOpenedChat] = useState<any>({});

  const handleOpenChat = (chat: any) => setOpenedChat(old => old._id === chat._id ? {} : chat);

  return (
    <AppContext.Provider
      value={{
        openedChat,
        handleOpenChat
      }}
    >
      { children }
    </AppContext.Provider>
  )
}
