export interface ICustomers {
  getCustomers({ user_id, token }: ICustomers.Params): Promise<any>;
}

export namespace ICustomers {
  export type Params = {
    user_id: string;
    token: string;
  };

  export type Data = {
    data: any;
  };
}
