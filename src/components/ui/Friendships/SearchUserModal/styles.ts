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
