import * as Yup from 'yup';

export const CreateUserSchema = Yup.object().shape({
  name: Yup.string().trim().strict().required('Nome é obrigatório'),
  lastName: Yup.string().trim().strict().required('Sobrenome é obrigatório'),
  username: Yup
    .string()
    .trim()
    .required('Username é obrigatório')
    .lowercase('Username deve estar em minúsculo')
    .min(3, 'Username precisa ter no mínimo 3 digitos'),
  password: Yup
    .string()
    .trim()
    .required('Senha é obrigatório')
    .min(6, 'Senha precisa ter no mínimo 6 digitos')
});

export const LoginUserSchema = Yup.object().shape({
  username: Yup
    .string()
    .trim()
    .required('Username é obrigatório')
    .lowercase('Username deve estar em minúsculo')
    .min(3, 'Username precisa ter no mínimo 3 digitos'),
  password: Yup
    .string()
    .trim()
    .required('Senha é obrigatório')
    .min(6, 'Senha precisa ter no mínimo 6 digitos')
});

export const CreateUserInitialValues = {
  name: '',
  lastName: '',
  username: '',
  password: ''
};
export const LoginUserInitialValues = { username: '', password: '' };
