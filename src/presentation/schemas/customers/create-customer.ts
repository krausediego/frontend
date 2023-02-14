import * as yup from 'yup';

const MESSAGES = {
  required: 'Campo obrigatório',
  email: 'Digite um email válido',
  date: 'Digite uma data válida',
};

export const CreateCustomerSchema = yup.object().shape({
  user_id: yup.string().required(MESSAGES.required),
  address_id: yup.string().required(MESSAGES.required),
  name: yup.string().required(MESSAGES.required),
  email: yup.string().email(MESSAGES.email),
  phone: yup.string().required(MESSAGES.required),
  birth_date: yup.date().when('$type', type => {
    if (type === 'fisico') {
      return yup.date().typeError(MESSAGES.date).required(MESSAGES.required);
    }
    return yup.string();
  }),
  genre: yup.string().when('$type', type => {
    if (type === 'fisico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  cpf: yup.string().when('$type', type => {
    if (type === 'fisico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  cnpj: yup.string().when('$type', type => {
    if (type === 'juridico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  inscricao_estadual: yup.string().when('$type', type => {
    if (type === 'juridico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  razao_social: yup.string().when('$type', type => {
    if (type === 'juridico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
});
