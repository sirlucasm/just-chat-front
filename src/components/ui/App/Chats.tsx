import styled from "styled-components";
import { colors } from "../../../styles/constants";
import { BiSearchAlt } from 'react-icons/bi';
import { useChatSWR } from "../../../services/swr/chatSwr";
import { SyncLoader } from "react-spinners";
import { Badge, Avatar } from "@mui/material";
import { getCurrentChatInfo } from "../../../utils/chat";
import { IUser } from "../../../interfaces/user";

interface ChatsProps {
  currentUser: IUser;
}

const Container = styled.section`
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: .75px solid rgba(200, 200, 200, .025);
  @media screen and (max-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-width: 1024px) {
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 40vh;
    border-right: 0;
    border-bottom: .75px solid rgba(200, 200, 200, .025);
  }
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    h2 {
      font-size: 26px;
      color: ${colors.WHITE};
    }
  }
`;
const SearchButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const ChatList = styled.div`
  margin-top: 20px;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #323645;
  margin: 12px 0;
  padding: 14px;
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    background-color: #393d4d;
  }
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  div{
    span {
      font-size: 14px;
      color: ${colors.WHITE};
    }
    p {
      font-size: 12px;
      color: #afafaf;
    }
  }
`;

export const Chats = ({ currentUser }: ChatsProps) => {
  const { chats, isLoading } = useChatSWR();
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
                  <ChatItem key={index}>
                    <div>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        color={isRoom ? "default" : "success"}
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
