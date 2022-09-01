import Image from "next/image";

import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { FaUserPlus } from 'react-icons/fa';
import { colors } from "../../../styles/constants";
import { useRouter } from "next/router";
import {
  NavArea,
  NavItems,
  ProfileArea
} from './styles';
import { IFriend } from "../../../interfaces/friend";
import { HeaderItem } from "./HeaderItem";

interface HeaderProps {
  friendRequestsReceived?: IFriend[];
}

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

export const Header = ({ friendRequestsReceived }: HeaderProps) => {
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
          navItems.map((item, index) => <HeaderItem
            key={index}
            item={item}
            active={routeActive(item.pathname)}
            friendRequestsReceived={friendRequestsReceived}
          />)
        }
      </NavItems>

      <ProfileArea>

      </ProfileArea>
    </NavArea>
  );
}
