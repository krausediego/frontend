export interface IDeleteCustomer {
  deleteCustomer({ data, token }: IDeleteCustomer.Params): Promise<{
    errors: any[];
    data: { data: IDeleteCustomer.Data[] } | null;
  }>;
}

export namespace IDeleteCustomer {
  export type Params = {
    token: string;
    data: Data;
  };

  export type Data = {
    customer_id: string;
    address_id: string;
  };
}
