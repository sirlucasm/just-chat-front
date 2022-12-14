import { IUser } from "../../../interfaces/user";
import { ChatOpen } from "../../ui/App/ChatOpen";
import { Chats } from "../../ui/App/Chats";
import { Header } from "../../ui/Header";
import { AppContainer } from "./styles";

interface AppLayoutProps {
  currentUser: IUser;
}

export const AppLayout = ({ currentUser }: AppLayoutProps) => {
  return (
    <AppContainer>
      <Header />
      <Chats currentUser={currentUser} />
      <ChatOpen currentUser={currentUser} />
    </AppContainer>
  );
}
