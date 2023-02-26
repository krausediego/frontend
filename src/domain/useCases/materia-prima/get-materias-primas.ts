export interface IMateriasPrimas {
  getMateriasPrimas({ user_id, token }: IMateriasPrimas.Params): Promise<{
    errors: any[];
    data: { data: IMateriasPrimas.Data[] } | null;
  }>;
}

export namespace IMateriasPrimas {
  export type Params = {
    user_id: any;
    token: string;
    search?: string;
  };

  export type Data = {
    id: string;
    user_id: string;
    name: string;
    quantity: string;
    unit: Units;
    amount: number;
    created_at: Date;
    updated_at: Date;
  };

  enum Units {
    un,
    kg,
    l,
  }
}
