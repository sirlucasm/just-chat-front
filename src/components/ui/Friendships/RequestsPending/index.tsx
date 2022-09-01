import { Avatar } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { IFriend } from "../../../../interfaces/friend";
import { IUser } from "../../../../interfaces/user";
import FriendService from "../../../../services/FriendService";
import { useFriendRequestReceivedSWR } from "../../../../services/swr/friendSwr";
import UserService from "../../../../services/UserService";
import { colors } from "../../../../styles/constants";
import { SearchInput } from "../../../Inputs";
import { SearchUserModal } from "../SearchUserModal";
import {
  ActionArea,
  ActionItem,
  RequestsPendingContainer,
  SearchArea,
  SearchButton,
  SearchRow,
  TitleArea,
   UserItem,
   UserList,
   UserNameArea
} from "./styles";

export default function RequestsSent() {
  const userService = new UserService();
  const friendService = new FriendService();
  const { friendRequestsReceived, isLoading: loadingRequestsReceived, mutate } = useFriendRequestReceivedSWR();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<IUser[]>([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const handleAcceptFriend = async (friendId: string) => {
    toast.promise(friendService.accept(friendId), {
      loading: '',
      success: 'Solicitação aceita',
      error: (error: any) => error?.response?.data?.message
    })
      .then(() => mutate());
  }

  const handleRefuseFriend = async (friendId: string) => {
    toast.promise(friendService.refuse(friendId), {
      loading: '',
      success: 'Solicitação recusada',
      error: (error: any) => error?.response?.data?.message
    })
      .then(() => mutate());
  }

  const handleSearchUser = async () => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setOpenSearchModal(false);
      return;
    }
    const searchResult = await userService.search(searchQuery);

    setSearchResult(searchResult);
    setOpenSearchModal(true);
  }

  return (
    <RequestsPendingContainer>
      <TitleArea>
        <h2>
          Solicitações recebidas
        </h2>
      </TitleArea>
      <SearchArea>
        <SearchRow>
          <SearchInput
            placeholder='Buscar usuário'
            onChange={(e: any) => setSearchQuery(e.target.value)}
            onKeyDown={(e: any) => e.keyCode === 13 && handleSearchUser()}
          />
          <SearchButton onClick={handleSearchUser}>
            <FaSearch size={16} color="#2e2e2e" />
          </SearchButton>
        </SearchRow>
        <SearchUserModal
          searchResult={searchResult}
          open={openSearchModal}
          handleClose={() => setOpenSearchModal(false)}
        />
      </SearchArea>
      <UserList>
        {
          loadingRequestsReceived ?
            <SyncLoader color={colors.PRIMARY} style={{ marginTop: 20 }} />
            :
            friendRequestsReceived.map((frr: IFriend, index: number) => {
              const { requester } = frr;
              return (
                <UserItem key={index}>
                  <Avatar
                    alt={requester.name}
                    sx={{ width: 38, height: 38, cursor: 'pointer' }}
                  />
                  <UserNameArea>
                    <div>
                      <span className="name-text">{ requester.name }</span>
                    </div>
                    <div>
                      <span className="username-text">{ requester.username }</span>
                    </div>
                  </UserNameArea>
                  <ActionArea>
                    <ActionItem
                      mr={8}
                      onClick={() => handleRefuseFriend(frr._id)}
                    >
                      <span>RECUSAR</span>
                    </ActionItem>
                    <ActionItem
                      acceptFriendButton
                      onClick={() => handleAcceptFriend(frr._id)}
                    >
                      <span>ACEITAR</span>
                    </ActionItem>
                  </ActionArea>
                </UserItem>
              )
            })
        }
      </UserList>
    </RequestsPendingContainer>
  );
}
