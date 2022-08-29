import styled from "styled-components";
import { colors } from "../../../styles/constants";

export const NavArea = styled.nav`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100px;
  border-right: .75px solid rgba(200, 200, 200, .025);
`;

export const NavItems = styled.div`
  width: 100%;
`;

export const NavItem = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  margin: 24px 0;
  cursor: pointer;
  border-left: 3px solid ${props => props.active ? colors.PRIMARY : 'transparent'};
  svg {
    path { color: ${props => props.active ? colors.PRIMARY : 'inherit'}; }
  }

  align-self: center;
  &:hover {
    transition: .6s;
    border-left: 3px solid ${colors.PRIMARY};
    svg {
      path { color: ${colors.PRIMARY}; transition: .6s; }
    }
  }
`;

export const ProfileArea = styled.div`

`;
