export namespace IAddress {
  export type Params = {
    user_id: any;
    token: string;
    search?: string;
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
