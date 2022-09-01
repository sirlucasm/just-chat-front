import styled from "styled-components";
import { colors } from "../styles/constants";

export const AuthInput = styled.input<any>`
  outline: none;
  border: 2px solid transparent;
  height: 45px;
  font-size: 14px;
  color: #ececec;
  width: 100%;
  background-color: #323645;
  border-radius: 12px;
  padding-left: 16px;
  &:focus {
    border: 2px solid ${colors.PRIMARY};
    box-shadow: 0 0 4px 1px rgba(29, 144, 244, .6);
  }
  ${props => props.mt && 'margin-top: 16px;'}

  &::placeholder {
    color: #8d8d8d;
  }

  ${props => props.error && `
    border: 2px solid ${colors.DANGER};
    box-shadow: 0 0 4px 1px rgba(255, 69, 69, .6);
  `}
`;

export const ChatInput = styled(AuthInput)`
  background-color: #424657;
  padding-top: 11px;
  min-height: 45px;
  max-height: 70px;
  overflow: hidden;
  resize: none;
`;

export const SearchInput = styled(ChatInput)`
  padding-top: 0;
`;
