import { Avatar, Modal } from "@mui/material";
import { IUser } from "../../../interfaces/user";
import { AddFriendButton, ModalContainer, PendingFriendButton, ProfileInfo, RemoveFriendButton } from "./styles";
import { IoAddOutline } from 'react-icons/io5';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineMinus } from 'react-icons/ai';
import { useGetFriendByUserIdSWR } from "../../../services/swr/friendSwr";
import FriendService from "../../../services/FriendService";

interface UserModaProps {
  open: boolean;
  handleClose(): void;
  user: IUser;
}

export const UserModal = ({
  open,
  handleClose,
  user
}: UserModaProps) => {
  const friendService = new FriendService();
  const { friend, mutate } = useGetFriendByUserIdSWR(user);

  const addFriend = async () => {
    const params = { recipient: user._id };
    await friendService.sendFriendRequest(params);
    await mutate();
  }

  const removeOrCancelFriend = async () => {
    await friendService.refuse(friend._id);
    await mutate();
  }

  const renderActionButton = {
    pending: (
      <PendingFriendButton onClick={removeOrCancelFriend}>
        <AiOutlineMinus size={18} />
        <span>Cancelar solicitação</span>
      </PendingFriendButton>
    ),
    friends: (
      <RemoveFriendButton onClick={removeOrCancelFriend}>
        <VscClose size={18} />
        <span>Remover amigo</span>
      </RemoveFriendButton>
    ),
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      keepMounted
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <ModalContainer>
        <ProfileInfo>
          <Avatar
            alt={user.name}
            sx={{ width: 90, height: 90, }}
          />
          <div className="user-text-area">
            <h2>{user.name}</h2>
            <span>{user.username}</span>
          </div>
        </ProfileInfo>
        {
          !friend ?
            <AddFriendButton onClick={addFriend}>
              <IoAddOutline size={18} />
              <span>Enviar solicitação</span>
            </AddFriendButton>
            :
            renderActionButton[friend.status]
        }
      </ModalContainer>
    </Modal>
  );
}
