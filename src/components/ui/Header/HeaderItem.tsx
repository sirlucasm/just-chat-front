import { Badge } from '@mui/material';
import Link from 'next/link';
import { IFriend } from '../../../interfaces/friend';
import {
  NavItem,
  ProfileArea
} from './styles';

interface HeaderItemProps {
  item: {
    pathname: string;
    name: string;
    icon: JSX.Element;
  };
  active?: boolean;
  friendRequestsReceived?: IFriend[];
}

export const HeaderItem = ({ ...props }) => {
  const { item, friendRequestsReceived } = props as HeaderItemProps;
  return (
    <NavItem {...props}>
      {
        item.name === 'solicitacoes' ?
          friendRequestsReceived ?
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color={"info"}
              badgeContent={friendRequestsReceived?.length}
            >
              <Link href={item.pathname}>
                <a>{item.icon}</a>
              </Link>
            </Badge>
            :
            <Link href={item.pathname}>
              <a>{item.icon}</a>
            </Link>
          :
          <Link href={item.pathname}>
            <a>{item.icon}</a>
          </Link>
      }
    </NavItem>
  );
}
