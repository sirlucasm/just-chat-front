import styled from "styled-components";
import { colors } from "../../../styles/constants";

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

export const CreateAccountTitleArea = styled.div`
  h2 {
    margin: 0;
    margin-top: 60px;
    font-size: 36px;
    color: #efefef;
    b {
      font-size: 32px;
      color: ${colors.PRIMARY};
    }
  }
`;

export const FormArea = styled.div`
  margin-left: 90px;
  width: 450px;
  form {
    button {
      width: 250px;
    }
  }
  @media screen and (max-width: 912px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    width: 100%;
    form {
      width: 320px;
      button {
        width: 100%;
      }
    }
  }
`;

export const DivInputRow = styled.div`
  display: flex;

`
