import { AuthUi } from "../../../ui/Auth";
import { SignUpForm } from "../../../ui/Auth/SignUpForm";

export const SignUpLayout = () => {
  return (
    <AuthUi title='Criar uma nova conta'>
      <SignUpForm style={{ marginTop: 30 }} />
    </AuthUi>
  )
}
