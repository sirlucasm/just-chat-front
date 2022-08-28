import { Avatar, Badge } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { useSWRConfig } from "swr";
import { socket } from "../../../../configs/socket";
import { useAppContext } from "../../../../contexts/app";
import { IUser } from "../../../../interfaces/user";
import { formatMessageSentDate, getCurrentChatInfo } from "../../../../utils/chat";
import { ChatInput } from "../../../Inputs";
import { ChatActionButton } from "../../../Buttons";
import {
  Container,
  UserHeaderInfoArea,
  UsernameAndActivity,
  ChatContent,
  InteractiveArea,
  MessageContainer,
  MessageItem,
  PanelChat,
  UserInfoText,
  UserMessageInfo,
} from './styles';

interface ChatOpenProps {
  currentUser: IUser;
}

export const ChatOpen = ({ currentUser }: ChatOpenProps) => {
  const { mutate } = useSWRConfig();
  const chatContentRef = useRef<any>();
  const { openedChat } = useAppContext();
  const currentUserChatInfo = getCurrentChatInfo(openedChat, currentUser);
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const [textMessage, setTextMessage] = useState<string>('');
  const [messages, setMessages] = useState<any>([]);
  const isRoom = !!currentUserChatInfo?.createdBy;
  const isOnline = onlineUsers.includes(currentUserChatInfo?._id)

  const fixTextAreaHeight = (e: any) => {
    e.target.style.height = e.target.scrollHeight+'px';
    if (!textMessage || textMessage.length <= 1) e.target.style.height = '45px';
  }

  const sendMessagePressKey = (e: any) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      // send message
      sendMessage();
    }
  }

  const sendMessage = () => {
    if (textMessage.trim()) {
      setTextMessage('');
      socket.emit('message:chat:message', {
        textMessage,
        userId: currentUser._id,
        chat: openedChat
      });
      mutate('chats');
    }
  }

  const scrollToBottom = () => {
    if (!chatContentRef.current) return;
    chatContentRef.current.scrollTo(0, chatContentRef.current.scrollHeight - chatContentRef.current.offsetHeight);
  };

  useEffect(() => {
    socket.on('user:onlineList', (payload) => setOnlineUsers(payload));
    socket.on('message:chat:allMessages', (payload) => setMessages(payload));
    socket.on('message:chat:message', (payload) => setMessages((old: any) => [...old, payload]));
  }, [socket]);

  useEffect(() => {
    if (!openedChat) return;
    socket.emit('message:chat:allMessages', { chatId: openedChat._id });
  }, [openedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {
        openedChat && currentUserChatInfo ?
          <Container>
            <UserHeaderInfoArea data-aos="fade-down">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color={isRoom ? "default" : isOnline ? "success" : "default"}
              >
                <Avatar
                  alt={currentUserChatInfo.name}
                  sx={{ width: 45, height: 45, cursor: 'pointer' }}
                />
              </Badge>
              <UsernameAndActivity>
                <h2>{currentUserChatInfo.name}</h2>
                <span>{isOnline ? 'Online' : 'Offline'}</span>
              </UsernameAndActivity>
            </UserHeaderInfoArea>
            <ChatContent data-aos="fade">
              <PanelChat ref={chatContentRef}>
                {
                  messages.map((message: any, index) => {
                    const itsMe = message.user._id === currentUser._id;
                    return (
                      <MessageContainer key={index} me={itsMe}>
                        <MessageItem me={itsMe}>
                          <span>{message.text}</span>
                        </MessageItem>
                        <UserMessageInfo me={itsMe}>
                          <Avatar
                            alt={currentUserChatInfo.name}
                            sx={{ width: 21, height: 21, }}
                          />
                          <UserInfoText me={itsMe}>
                            <span>{message.user.name}</span>
                            <strong>{formatMessageSentDate(message.createdAt)}</strong>
                          </UserInfoText>
                        </UserMessageInfo>
                      </MessageContainer>
                    );
                  })
                }
              </PanelChat>
              <InteractiveArea>
                <ChatActionButton
                  customType='default'
                  as='button'
                >
                  <BsPlus />
                </ChatActionButton>
                <ChatInput
                  as='textarea'
                  placeholder='Escreva algo...'
                  rows="1"
                  onInput={fixTextAreaHeight}
                  onKeyDown={sendMessagePressKey}
                  onChange={(e: any) => setTextMessage(e.target.value)}
                  value={textMessage}
                />
                <ChatActionButton
                  customType='send'
                  as='button'
                  onClick={sendMessage}
                >
                  <TbSend />
                </ChatActionButton>
              </InteractiveArea>
            </ChatContent>
          </Container>
        : null
      }
    </>
  );
}
