import styled from "styled-components";
import { colors } from "../../../../styles/constants";

export const Container = styled.section`
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

export const UserHeaderInfoArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
  box-shadow: 0 48px 40px -2px #282a37;
`;

export const UsernameAndActivity = styled.div`
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

export const ChatContent = styled.div`
  border-radius: 14px;
  background-color: #323645;
  width: 100%;
  height: 100%;
  max-height: 89%;
  position: relative;
`;

export const InteractiveArea = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  gap: 14px;
  justify-content: center;
  height: 11%;
`;

export const PanelChat = styled.div`
  height: 89%;
  overflow-y: auto;
  padding: 14px 40px;
  display: flex;
  flex-direction: column;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: none;
    scrollbar-color: #9e9e9e #e0e0e0;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a7a7a7;
    border-radius: 2px;
    border: 3px none #ffffff;
  }
`;

export const MessageContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-self: ${({ me }) => me ? 'flex-end' : 'flex-start'};
`;

export const MessageItem = styled.div<any>`
  min-height: 45px;
  width: fit-content;
  max-width: 450px;
  align-self: inherit;
  background-color: ${({ me }) => me ? colors.SECONDARY : '#434758'};
  color: ${colors.WHITE};
  padding: 14px 18px;
  cursor: default;
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

export const UserMessageInfo = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: ${({ me }) => me ? 'row-reverse' : 'row'};
  cursor: pointer;
  user-select: none;
  width: fit-content;
  max-width: 450px;
  margin: 8px 0 14px 0;
`;
export const UserInfoText = styled.div<any>`
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
