import * as yup from 'yup';

const MESSAGES = {
  required: 'Campo obrigatório',
  email: 'Digite um email válido',
};

export const CreateCustomerSchema = yup.object().shape({
  user_id: yup.string().required(MESSAGES.required),
  address_id: yup.string().required(MESSAGES.required),
  name: yup.string().required(MESSAGES.required),
  email: yup.string().email(MESSAGES.email),
  phone: yup.string().required(MESSAGES.required),
  birth_date: yup.date(),
  genre: yup.string(),
  cpf: yup.string().when('$type', type => {
    if (type === 'fisico') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  cnpj: yup.string(),
  inscricao_estadual: yup.string(),
  razao_social: yup.string(),
});
