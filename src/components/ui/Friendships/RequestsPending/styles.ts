import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "../../../../styles/constants";

export const RequestsPendingContainer = styled.div`
  padding: 14px 20px;
  width: 50%;
  border-right: .75px solid rgba(200, 200, 200, .025);
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.div`
  h2 {
    font-size: 26px;
    color: ${colors.WHITE};
  }
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #323645;
  border-radius: 14px;
  border-radius: 14px;
  padding: 14px;
  margin-top: 15px;
  position: relative;
`;

export const UserNameArea = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  div {
    .name-text {
      position: relative;
      top: 5px;
      font-size: 14px;
      color: #efefef;
    }
    .username-text {
      position: relative;
      bottom: 5px;
      font-size: 12px;
      color: #a5a5a5;
    }
  }
`;

export const ActionArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
`;

export const ActionItem = styled.button<{ acceptFriendButton?: boolean; mr?: number; }>`
  outline: hidden;
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid ${colors.DANGER};
  span {
    font-size: 13px;
    color: ${colors.DANGER};
  }
  cursor: pointer;
  user-select: none;
  margin-right: ${({ mr }) => mr ? `${mr}px` : '0'};

  ${({ acceptFriendButton }) => acceptFriendButton && css`
    border-color: ${colors.SUCCESS};
    span { color: ${colors.SUCCESS}; }
  `}
`;

export const SearchArea = styled.div`
  max-width: 80%;
  position: relative;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #54c0eb;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s;
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    box-shadow: 0 0 10px 0 #1c8dee;
  }
`;
