import { useFormik } from 'formik';
import { useAuthContext } from '../../../contexts/auth';
import { CreateUserInitialValues, CreateUserSchema } from '../../../schemas/User';
import { AuthButton } from '../../Buttons';
import { AuthInput } from '../../Inputs';
import { DivInputRow } from './styles';

export const SignUpForm = (props) => {
  const { signUp } = useAuthContext();

  const formik = useFormik({
    initialValues: CreateUserInitialValues,
    onSubmit: (params) => {
      const name = `${params.name} ${params.lastName}`;
      signUp({
        username: params.username,
        password: params.password,
        name
      })
    },
    validateOnMount: false,
    validationSchema: CreateUserSchema
  })
  return (
    <form onSubmit={formik.handleSubmit} {...props}>
      <DivInputRow>
        <AuthInput
          placeholder='Nome'
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
          required
          style={{ marginRight: 10 }}
        />
        <AuthInput
          placeholder='Sobrenome'
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
          required
          style={{ marginLeft: 10 }}
        />
      </DivInputRow>
      <AuthInput
        placeholder='Username'
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        error={formik.touched.username && formik.errors.username}
        required
        mt
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
        onClick={formik.handleSubmit}
      >
        Cadastrar
      </AuthButton>
    </form>
  );
}
