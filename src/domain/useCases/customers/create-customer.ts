import { IAddress } from '../address/address';

export interface ICreateCustomer {
  createCustomer({ data, token }: ICreateCustomer.Params): Promise<{
    errors: any[];
    data: ICreateCustomer.Data[] | null;
  }>;
}

export namespace ICreateCustomer {
  export type Params = {
    token: string;
    data: Data;
  };

  export type Data = {
    id: string;
    user_id: string;
    address_id: string;
    address?: IAddress.Data;
    name: string;
    email: string;
    phone: string;
    status: boolean;
    birth_date?: Date;
    genre?: string;
    cpf?: string;
    cnpj?: string;
    inscricao_estadual?: string;
    razao_social?: string;
    created_at: Date;
    updated_at: Date;
  };
}
