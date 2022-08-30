import { Avatar } from "@mui/material";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";
import { IFriend } from "../../../../interfaces/friend";
import FriendService from "../../../../services/FriendService";
import { useFriendRequestSendedSWR } from "../../../../services/swr/friendSwr";
import { colors } from "../../../../styles/constants";
import { ActionArea, ActionItem, RequestsSentContainer, TitleArea, UserItem, UserList, UserNameArea } from "./styles";

export default function RequestsPending() {
  const { friendRequestsSended, isLoading: loadingRequestsSended, mutate } = useFriendRequestSendedSWR();

  const handleRefuseFriend = async (friendId: string) => {
    toast.promise(FriendService.refuse(friendId), {
      loading: '',
      success: 'Solicitação aceita',
      error: (error: any) => error?.response?.data?.message
    })
      .then(() => mutate());
  }
  return (
    <RequestsSentContainer>
      <TitleArea>
        <h2>
          Solicitações enviadas
        </h2>
      </TitleArea>
      <UserList>
        {
          loadingRequestsSended ?
            <SyncLoader color={colors.PRIMARY} />
            :
            friendRequestsSended.map((frs: IFriend, index: number) => {
              const { recipient } = frs;
              return (
                <UserItem key={index}>
                  <Avatar
                    alt={recipient.name}
                    sx={{ width: 38, height: 38, cursor: 'pointer' }}
                  />
                  <UserNameArea>
                    <div>
                      <span className="name-text">{ recipient.name }</span>
                    </div>
                    <div>
                      <span className="username-text">{ recipient.username }</span>
                    </div>
                  </UserNameArea>
                  <ActionArea>
                    <ActionItem
                      mr={8}
                      onClick={() => handleRefuseFriend(frs._id)}
                    >
                      <span>CANCELAR</span>
                    </ActionItem>
                  </ActionArea>
                </UserItem>
              );
            })
        }
      </UserList>
    </RequestsSentContainer>
  );
}
