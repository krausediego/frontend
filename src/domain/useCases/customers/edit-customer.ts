import { IAddress } from '../address/address';

export interface IEditCustomer {
  editCustomer({ data, token }: IEditCustomer.Params): Promise<{
    errors: any[];
    data: { data: IEditCustomer.Data } | null;
  }>;
}

export namespace IEditCustomer {
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
