import Image from "next/image";
import styled from "styled-components";

import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { colors } from "../../../styles/constants";
import { useRouter } from "next/router";
import Link from "next/link";

const NavArea = styled.nav`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100px;
  border-right: .75px solid rgba(200, 200, 200, .025);
`;

const NavItems = styled.div`
  width: 100%;
`;

const NavItem = styled.div<any>`
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

const ProfileArea = styled.div`

`;

const navItems = [
  {
    pathname: '/app',
    name: 'app',
    icon: <BsFillChatRightDotsFill size={19} color={colors.WHITE} />
  },
  {
    pathname: '/notificacoes',
    name: 'notificacoes',
    icon: <IoNotifications size={19} color={colors.WHITE} />
  },
  {
    pathname: '/configurar',
    name: 'configurar',
    icon: <IoMdSettings size={19} color={colors.WHITE} />
  },
]

export const Header = () => {
  const router = useRouter();

  const routeActive = (pathname: string) => router.pathname === pathname;

  return (
    <NavArea>
      <div>
        <Image
          src='/assets/chat-icon.svg'
          alt='Logo'
          height={48}
          width={48}
        />
      </div>

      <NavItems>
        {
          navItems.map((item, index) => (
            <NavItem key={index} active={routeActive(item.pathname)}>
              <Link href={item.pathname}>
                <a>{item.icon}</a>
              </Link>
            </NavItem>
          ))
        }
      </NavItems>

      <ProfileArea>

      </ProfileArea>
    </NavArea>
  );
}
