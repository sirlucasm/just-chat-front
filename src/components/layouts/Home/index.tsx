import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "../../Buttons";
import { BackgroundContainer } from "../../Containers";
import { ButtonsArea, Content, DescriptionArea, TitleArea } from "./styles";

export const HomeLayout = () => {
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

      <Content>
        <DescriptionArea>
          <span><strong>Faça amigos por toda parte do mundo. Mantenha conversas em dia, não importa onde!</strong></span>
        </DescriptionArea>
        <ButtonsArea>
          <AuthButton isLogin>
            <Link href='/entrar'>
              <a>Entrar</a>
            </Link>
          </AuthButton>
          <AuthButton style={{ marginTop: 15 }}>
            <Link href='/criar-conta'>
              <a>Criar conta</a>
            </Link>
          </AuthButton>
        </ButtonsArea>
      </Content>
    </BackgroundContainer>
  );
}
