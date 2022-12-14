import { IUser } from "../../../interfaces/user";
import { useFriendRequestReceivedSWR } from "../../../services/swr/friendSwr";
import { RequestsPending, RequestsSent } from "../../ui/Friendships";
import { Header } from "../../ui/Header";
import { FriendshipContainer } from "./styles"

interface FriendshipLayoutProps {
  currentUser: IUser;
}

export const FriendshipLayout = ({ currentUser }: FriendshipLayoutProps) => {
  return (
    <FriendshipContainer>
      <Header />
      <RequestsPending />
      <RequestsSent />
    </FriendshipContainer>
  );
};
