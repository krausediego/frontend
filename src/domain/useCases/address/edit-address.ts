export interface IEditAddress {
  editAddress({ data, token }: IEditAddress.Params): Promise<{
    errors: any[];
    data: { data: IEditAddress.Data } | null;
  }>;
}

export namespace IEditAddress {
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
