import { IUser } from "../../../interfaces/user";
import { Chats } from "../../ui/App/Chats";
import { Header } from "../../ui/App/Header";
import { AppContainer } from "./styles";

interface AppLayoutProps {
  currentUser: IUser;
}

export const AppLayout = ({ currentUser }: AppLayoutProps) => {
  return (
    <AppContainer>
      <Header />
      <Chats currentUser={currentUser} />
    </AppContainer>
  );
}
