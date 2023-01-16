import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'O usuário deve conter ao mínimo 6 caracteres'),
  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Digite um email válido'),
  password: yup
    .string()
    .min(6, 'A senha deve conter ao mínimo 6 caracteres')
    .required('Campo obrigatório'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem')
    .required('Campo obrigatório'),
});
