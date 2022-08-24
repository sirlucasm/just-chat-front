import styled from "styled-components";
import { colors } from "../../../styles/constants";
import { BiSearchAlt } from 'react-icons/bi';

const Container = styled.section`
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
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

const TitleArea = styled.div`
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
const SearchButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

export const Chats = () => {
  return (
    <Container>
      <TitleArea>
        <div>
          <h2>Conversas</h2>
        </div>
        <SearchButton onClick={() => alert('open search modal')}>
          <BiSearchAlt size={29} color={colors.WHITE} />
        </SearchButton>
      </TitleArea>
    </Container>
  );
}
