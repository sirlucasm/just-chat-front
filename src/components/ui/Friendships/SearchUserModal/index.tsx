import { Avatar } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import { useAppContext } from "../../../../contexts/app";
import { IUser } from "../../../../interfaces/user";
import {
  CloseButton,
  Container,
  NoResultArea,
  UserItem,
  UserNameArea
} from "./styles";

interface SearchModalProps {
  searchResult: IUser[];
  open: boolean;
  handleClose(): void;
}

export const SearchUserModal = ({ searchResult, open, handleClose }: SearchModalProps) => {
  const { handleOpenUserModal } = useAppContext();
  return (
    <>
      {
        open && <Container
          data-aos="zoom-in-down"
          data-aos-duration="300"
          data-aos-easing="ease-in-back"
        >
          {
            searchResult.length ?
              searchResult.map((user, index) => (
                <UserItem key={index} onClick={() => handleOpenUserModal(user)}>
                  <Avatar
                    alt={user.name}
                    sx={{ width: 38, height: 38, cursor: 'pointer' }}
                  />
                  <UserNameArea>
                    <div>
                      <span className="name-text">{user.name}</span>
                    </div>
                    <div>
                      <span className="username-text">{user.username}</span>
                    </div>
                  </UserNameArea>
                </UserItem>
              ))
              :
              <NoResultArea>
                <span>Sem resultados</span>
              </NoResultArea>
          }
          <CloseButton onClick={handleClose}>
            <IoIosArrowUp size={28} color="#a9a9a9" />
          </CloseButton>
        </Container>
      }
    </>
  );
}
