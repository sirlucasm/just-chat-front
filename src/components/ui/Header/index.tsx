import Image from "next/image";
import styled from "styled-components";

import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { FaUserPlus } from 'react-icons/fa';
import { colors } from "../../../styles/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavArea,
  NavItems,
  NavItem,
  ProfileArea
} from './styles';

const navItems = [
  {
    pathname: '/app',
    name: 'app',
    icon: <BsFillChatRightDotsFill size={19} color={colors.WHITE} />
  },
  {
    pathname: '/solicitacoes',
    name: 'solicitacoes',
    icon: <FaUserPlus size={19} color={colors.WHITE} />
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
