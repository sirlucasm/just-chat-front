import styled from "styled-components";
import { colors } from "../../../../styles/constants";

export const Container = styled.section`
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

export const TitleArea = styled.div`
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
export const SearchButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

export const ChatList = styled.div`
  margin-top: 20px;
`;

export const ChatItem = styled.div<any>`
  display: flex;
  align-items: center;
  background-color: ${props => props.activeChat ? colors.SECONDARY : '#323645'};
  margin: 12px 0;
  padding: 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background-color: ${props => props.activeChat ? '#157ed9' : '#393d4d' };
  }
`;

export const ChatInfo = styled.div`
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
      margin: 0;
      margin-top: -4px;
    }
  }
`;
