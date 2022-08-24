import styled from "styled-components";

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  h2 {
    margin: 0;
    margin-top: 40px;
    font-size: 55px;
    color: #efefef;
    font-family: HotRuby;
    margin-left: 20px;
    user-select: none;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionArea = styled.div`
  margin-top: 120px;
  max-width: 740px;
  text-align: center;
  span {
    font-size: 32px;
    color: #ececec;
  }
`;

export const ButtonsArea = styled.div`
  margin-top: 60px;
`;
