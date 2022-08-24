import Image from "next/image";
import { BackgroundContainer } from "../../Containers"
import { LoginForm } from "../../ui/Auth/LoginForm";
import { CreateAccountTitleArea, FormArea, TitleArea } from "./styles";

export const AuthUi = ({ title, children }: any) => {
  return (
    <BackgroundContainer>
      <TitleArea>
        <Image
          src='/assets/chat-icon.svg'
          alt='Logo'
          height={68}
          width={68}
        />
        <div>
          <h2>JustChat</h2>
        </div>
      </TitleArea>
      <FormArea>
        <CreateAccountTitleArea>
          <div>
            <h2>{title}<b>.</b></h2>
          </div>
        </CreateAccountTitleArea>
        {children}
      </FormArea>
    </BackgroundContainer>
  )
}
