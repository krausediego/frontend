export interface IGetCEP {
  getCEP({ cep }: IGetCEP.Params): Promise<{
    errors: any[];
    data: { data: IGetCEP.Data } | null;
  }>;
}

export namespace IGetCEP {
  export type Params = {
    cep: string;
  };

  export type Data = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };
}
