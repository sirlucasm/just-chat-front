import { useFormik } from 'formik';
import { useAuthContext } from '../../../contexts/auth';
import { LoginUserInitialValues, LoginUserSchema } from '../../../schemas/User';
import { AuthButton } from '../../Buttons';
import { AuthInput } from '../../Inputs';

export const LoginForm = (props) => {
  const { login } = useAuthContext();

  const formik = useFormik({
    initialValues: LoginUserInitialValues,
    onSubmit: login,
    validateOnMount: false,
    validationSchema: LoginUserSchema
  })
  return (
    <form onSubmit={formik.handleSubmit} {...props}>
      <AuthInput
        placeholder='Username'
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        error={formik.touched.username && formik.errors.username}
        required
      />
      <AuthInput
        placeholder='Senha'
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password}
        required
        mt
      />
      <AuthButton
        as='button'
        isLogin
        style={{ marginTop: 40 }}
        type='submit'
      >
        Entrar
      </AuthButton>
    </form>
  );
}
