import styled from "styled-components";
import { colors } from "../../../styles/constants";

export const ModalContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 100px;
  background-color: #323645;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .user-text-area {
    text-align: center;
    h2 {
      margin: 0;
      margin-top: 10px;
      color: #efefef;
      font-size: 17px;
    }
    span {
      position: relative;
      top: -5px;
      color: #a7a7a7;
      font-size: 14px;
    }
  }
`;

export const AddFriendButton = styled.button`
  outline: none;
  border: 0;
  background-color: ${colors.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  color: #2e2e2e;
  margin-top: 30px;
`;

export const RemoveFriendButton = styled(AddFriendButton)`
  background-color: ${colors.DANGER};
  color: #efefef;
`;

export const PendingFriendButton = styled(AddFriendButton)`
  background-color: ${colors.WARNING};
  color: #efefef;
`;
