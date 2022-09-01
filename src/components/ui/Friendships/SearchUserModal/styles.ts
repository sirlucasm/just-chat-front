import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 60px;
  max-height: 345px;
  background-color: #424657;
  margin-top: 6px;
  border-radius: 6px;
  padding: 10px 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  padding: 5px 10px;
  margin-top: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    transition: .2s;
    background-color: #2f3342;
  }
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

export const CloseButton = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  position: relative;
  bottom: -8px;
  cursor: pointer;
`;

export const NoResultArea = styled.div`
  align-self: center;
  span {
    color: #ececec;
    font-size: 14px;
  }
`;
