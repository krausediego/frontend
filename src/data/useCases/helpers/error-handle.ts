import { AxiosError, AxiosResponse } from 'axios';

export type Result = {
  errors: any[];
  data: null;
};

export const errorHandler = (err: AxiosResponse, statusCode = 500): Result => {
  if (statusCode >= 400 && statusCode < 500) {
    if (statusCode === 403)
      return {
        errors: ['Sessão expirada. Faça login novamente!!!'],
        data: null,
      };
  }
  return {
    errors: err?.data?.message || 'Erro inesperado.',
    data: null,
  };
};
