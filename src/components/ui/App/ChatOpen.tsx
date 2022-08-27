import { Avatar, Badge } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import styled from "styled-components";
import { socket } from "../../../configs/socket";
import { useAppContext } from "../../../contexts/app";
import { IUser } from "../../../interfaces/user";
import { colors } from "../../../styles/constants";
import { formatMessageSentDate, getCurrentChatInfo } from "../../../utils/chat";
import { ChatActionButton } from "../../Buttons";
import { ChatInput } from "../../Inputs";

interface ChatOpenProps {
  currentUser: IUser;
}

const Container = styled.section`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  width: 70%;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {

  }
`;

const UserHeaderInfoArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
  box-shadow: 0 48px 40px -2px #282a37;
`;

const UsernameAndActivity = styled.div`
  margin-left: 12px;
  color: ${colors.WHITE};
  user-select: none;
  h2 {
    margin: 0;
    margin-bottom: -8px;
    font-size: 18px;
    cursor: pointer;
  }
  span {
    margin: 0%;
    color: #9c9c9c;
    font-size: 12px;
    cursor: default;
  }
`;

const ChatContent = styled.div`
  border-radius: 14px;
  background-color: #323645;
  width: 100%;
  max-height: 89%;
  position: relative;
`;

const InteractiveArea = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  gap: 14px;
  justify-content: center;
  height: 11%;
`;

const PanelChat = styled.div`
  height: 89%;
  overflow-y: auto;
  padding: 14px 40px;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-self: ${({ me }) => me ? 'flex-end' : 'flex-start'};
`;

const MessageItem = styled.div<any>`
  min-height: 45px;
  width: fit-content;
  max-width: 450px;
  align-self: inherit;
  background-color: ${({ me }) => me ? colors.SECONDARY : '#434758'};
  color: ${colors.WHITE};
  padding: 14px 18px;
  user-select: none;
  display: flex;
  align-items: center;
  overflow-wrap: anywhere;
  span {
    font-size: 14px;
  }

  ${props => props.me ? `
    border-radius: 23px 23px 4px 23px;
  ` : `
    border-radius: 23px 23px 23px 4px;
  `}
`;

const UserMessageInfo = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: ${({ me }) => me ? 'row-reverse' : 'row'};
  cursor: pointer;
  user-select: none;
  width: fit-content;
  max-width: 450px;
  margin: 8px 0 14px 0;
`;
const UserInfoText = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: ${({ me }) => me ? 'row-reverse' : 'row'};

  span {
    color: ${colors.WHITE};
    font-size: 12px;
    margin-left: 8px;
    margin-right: 8px;
  }
  strong {
    color: #6d6f7e;
    font-size: 12px;
    margin-left: 4px;
    margin-right: 4px;
    user-select: text;
    cursor: text;
  }
`;

export const ChatOpen = ({ currentUser }: ChatOpenProps) => {
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
    setTextMessage('');
    socket.emit('message:chat:message', {
      textMessage,
      userId: currentUser._id,
      chat: openedChat
    });
  }

  const scrollToBottom = () => {
    if (!chatContentRef.current) return;
    chatContentRef.current.scrollTo(0, chatContentRef.current.offsetTop - (-chatContentRef.current.offsetHeight));
  };

  useEffect(() => {
    socket.on('user:onlineList', (payload) => setOnlineUsers(payload));
    socket.on('message:chat:allMessages', (payload) => setMessages(payload));
    socket.on('message:chat:message', (payload) => setMessages((old: any) => [...old, payload]));
  }, [socket]);

  useEffect(() => {
    if (!openedChat) return;
    socket.emit('message:chat:allMessages', { chatId: openedChat._id });
  }, [openedChat._id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {
        openedChat && currentUserChatInfo ?
          <Container>
            <UserHeaderInfoArea>
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
            <ChatContent>
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
                            <strong>{formatMessageSentDate(Date.now())}</strong>
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
