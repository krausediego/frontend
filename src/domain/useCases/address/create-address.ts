export interface ICreateAddress {
  createAddress({ data, token }: ICreateAddress.Params): Promise<{
    errors: any[];
    data: { data: ICreateAddress.Data } | null;
  }>;
}

export namespace ICreateAddress {
  export type Params = {
    token: string;
    data: Data;
  };

  export type Data = {
    id: string;
    user_id: string;
    cep?: string;
    address: string;
    city: string;
    district: string;
    number?: number;
    reference?: string;
    uf: string;
    created_at: string;
    updated_at: string;
  };
}
