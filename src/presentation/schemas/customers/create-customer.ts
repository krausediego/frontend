import * as yup from 'yup';

const MESSAGES = {
  required: 'Campo obrigatório',
  email: 'Digite um email válido',
  date: 'Digite uma data válida',
};

export const CreateCustomerSchema = yup.object().shape({
  name: yup.string().required(MESSAGES.required),
  email: yup.string().email(MESSAGES.email),
  phone: yup.string().required(MESSAGES.required),
  birth_date: yup.date().when('$type', type => {
    if (type === 'fisica') {
      return yup.date().typeError(MESSAGES.date).required(MESSAGES.required);
    }
    return yup.string();
  }),
  genre: yup.string().when('$type', type => {
    if (type === 'fisica') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string();
  }),
  cpf: yup.string().when('$type', type => {
    if (type === 'fisica') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string().nullable();
  }),
  cnpj: yup.string().when('$type', type => {
    if (type === 'juridica') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string().nullable();
  }),
  inscricao_estadual: yup.string().when('$type', type => {
    if (type === 'juridica') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string().nullable();
  }),
  razao_social: yup.string().when('$type', type => {
    if (type === 'juridica') {
      return yup.string().required(MESSAGES.required);
    }
    return yup.string().nullable();
  }),
  address: yup.object().shape({
    cep: yup.string().nullable(),
    address: yup.string().required(MESSAGES.required),
    city: yup.string().required(MESSAGES.required),
    district: yup.string().required(MESSAGES.required),
    number: yup.number().nullable(),
    reference: yup.string().nullable(),
    uf: yup.string().required(MESSAGES.required),
  }),
});
