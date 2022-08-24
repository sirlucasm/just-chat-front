import { AuthUi } from "../../../ui/Auth";
import { LoginForm } from "../../../ui/Auth/LoginForm";

export const LoginLayout = () => {
  return (
    <AuthUi title='Entrar'>
      <LoginForm style={{ marginTop: 30 }} />
    </AuthUi>
  )
}
