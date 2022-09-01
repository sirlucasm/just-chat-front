import { Avatar } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import { IUser } from "../../../../interfaces/user";
import { ActionArea, ActionItem, UserItem, UserNameArea } from "../RequestsPending/styles";
import { CloseButton, Container, NoResultArea } from "./styles";

interface SearchModalProps {
  searchResult: IUser[];
  open: boolean;
  handleClose(): void;
}

export const SearchUserModal = ({ searchResult, open, handleClose }: SearchModalProps) => {
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
                <UserItem key={index}>
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
                  <ActionArea>
                  </ActionArea>
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
