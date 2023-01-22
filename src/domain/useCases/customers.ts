export interface ICustomers {
  getCustomers({ user_id, token }: ICustomers.Params): Promise<{
    errors: any[];
    data: ICustomers.Data[] | null;
  }>;
}

export namespace ICustomers {
  export type Params = {
    user_id: any;
    token: string;
    search?: string;
  };

  export type Data = {
    id: string;
    user_id: string;
    address_id: string;
    name: string;
    email: string;
    phone: string;
    status: boolean;
    birth_date: Date;
    genre: string;
    cpf: string;
    cnpj: string;
    inscricao_estadual: string;
    razao_social: string;
    created_at: Date;
    updated_at: Date;
  };
}
