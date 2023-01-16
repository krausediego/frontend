import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  emailOrUsername: yup.string().required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve conter ao mínimo 6 caracteres')
    .required('Campo obrigatório'),
});
