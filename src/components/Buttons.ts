import styled, { css } from "styled-components";
import { colors } from "../styles/constants";

type IChatActionButton = {
  bgColor?: string;
  color?: string;
  customType: "default" | "send";
}

export const AuthButton = styled.div<any>`
  background-color: ${props => props.isLogin ? '#1c8dee' : '#ececec'};
  color: ${props => props.isLogin ? '#ececec' : '#3d3d3d'};
  border-radius: 50px;
  font-size: 19px;
  height: 49px;
  width: ${props => props.width ? props.width : '260px'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .1s ease-in;
  border: 0;

  &:hover {
    box-shadow: 0 0 10px 0 ${props => props.isLogin ? '#1c8dee' : '#ececec'};
  }

  a {
    width: 100%;
    text-align: center;
  }
`;

const ActionButtons = css`
  border-radius: 12px;
  height: 45px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .1s ease-in;
  border: 0;
  font-size: 24px;
`;

export const ChatActionButton = styled.div<IChatActionButton>`
  ${props => props.customType === 'default' ? `
    ${ActionButtons}
    background-color: ${props.bgColor || '#434758'};
    color: ${props.color || colors.WHITE};
  ` : `
    ${ActionButtons}
    background-color: ${props.bgColor || colors.SECONDARY};
    color: ${props.color || colors.WHITE};
    &:hover {
      box-shadow: 0 0 10px 0 #1c8dee;
    }
  `}
`;
