import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "../../Buttons";
import { BackgroundContainer } from "../../Containers";
import { ButtonsArea, Content, DescriptionArea, TitleArea } from "./styles";

export const HomeLayout = () => {
  return (
    <BackgroundContainer>
      <TitleArea data-aos="fade-down" data-aos-duration="1000">
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
        <DescriptionArea data-aos="flip-down" data-aos-duration="1000">
          <span><strong>Faça amigos por toda parte do mundo. Mantenha conversas em dia, não importa onde!</strong></span>
        </DescriptionArea>
        <ButtonsArea>
          <AuthButton
            isLogin
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href='/entrar'>
              <a>Entrar</a>
            </Link>
          </AuthButton>
          <AuthButton
            style={{ marginTop: 15 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href='/criar-conta'>
              <a>Criar conta</a>
            </Link>
          </AuthButton>
        </ButtonsArea>
      </Content>
    </BackgroundContainer>
  );
}
