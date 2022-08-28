import styled from "styled-components";
import { colors } from "../../../../styles/constants";
import { BiSearchAlt } from 'react-icons/bi';
import { useChatSWR } from "../../../../services/swr/chatSwr";
import { SyncLoader } from "react-spinners";
import { Badge, Avatar } from "@mui/material";
import { getCurrentChatInfo } from "../../../../utils/chat";
import { IUser } from "../../../../interfaces/user";
import { useEffect, useState } from "react";
import { socket } from "../../../../configs/socket";
import { useAppContext } from "../../../../contexts/app";
import {
  Container,
  ChatInfo,
  ChatItem,
  ChatList,
  SearchButton,
  TitleArea,
} from './styles';

interface ChatsProps {
  currentUser: IUser;
}

export const Chats = ({ currentUser }: ChatsProps) => {
  const { chats, isLoading } = useChatSWR();
  const { openedChat, handleOpenChat } = useAppContext();
  const [onlineUsers, setOnlineUsers] = useState<any>([]);

  useEffect(() => {
    if (!isLoading) socket.emit('message:chat:join', chats);
    socket.on('user:onlineList', (payload) => setOnlineUsers(payload));
  }, [isLoading]);

  return (
    <Container>
      <TitleArea>
        <div>
          <h2>Conversas</h2>
        </div>
        <SearchButton onClick={() => alert('open search modal')}>
          <BiSearchAlt size={29} color={colors.WHITE} />
        </SearchButton>
      </TitleArea>

      {
        isLoading ?
          <SyncLoader color={colors.PRIMARY} />
          :
          <ChatList>
            {
              chats.map((chat, index) => {
                const { messageInfo } = chat;
                const currentChatInfo = getCurrentChatInfo(chat, currentUser);
                const isRoom = !!currentChatInfo.createdBy;

                return (
                  <ChatItem
                    key={index}
                    onClick={() => handleOpenChat(chat)}
                    activeChat={openedChat._id === chat._id}
                  >
                    <div>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        color={isRoom ? "default" : onlineUsers.includes(currentChatInfo._id) ? "success" : "default"}
                      >
                        <Avatar alt={currentChatInfo.name} />
                      </Badge>
                    </div>
                    <ChatInfo>
                      <div>
                        <span>{currentChatInfo.name}</span>
                      </div>
                      {
                        messageInfo.lastMessage && <div>
                          <p>{messageInfo.lastMessage.text}</p>
                        </div>
                      }
                    </ChatInfo>
                  </ChatItem>
                )
              })
            }
          </ChatList>
      }
    </Container>
  );
}
