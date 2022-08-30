import { Avatar } from "@mui/material";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";
import { IFriend } from "../../../../interfaces/friend";
import FriendService from "../../../../services/FriendService";
import { useFriendRequestReceivedSWR } from "../../../../services/swr/friendSwr";
import { colors } from "../../../../styles/constants";
import { ActionArea, ActionItem, RequestsPendingContainer, TitleArea, UserItem, UserList, UserNameArea } from "./styles";

export default function RequestsSent() {
  const { friendRequestsReceived, isLoading: loadingRequestsReceived, mutate } = useFriendRequestReceivedSWR();

  const handleAcceptFriend = async (friendId: string) => {
    toast.promise(FriendService.accept(friendId), {
      loading: '',
      success: 'Solicitação aceita',
      error: (error: any) => error?.response?.data?.message
    })
      .then(() => mutate());
  }

  const handleRefuseFriend = async (friendId: string) => {
    toast.promise(FriendService.refuse(friendId), {
      loading: '',
      success: 'Solicitação aceita',
      error: (error: any) => error?.response?.data?.message
    })
      .then(() => mutate());
  }

  return (
    <RequestsPendingContainer>
      <TitleArea>
        <h2>
          Solicitações recebidas
        </h2>
      </TitleArea>
      <UserList>
        {
          loadingRequestsReceived ?
            <SyncLoader color={colors.PRIMARY} />
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
