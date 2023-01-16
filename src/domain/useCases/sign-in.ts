export interface ISignIn {
  signIn(data: ISignIn.Data): Promise<any>;
}

export namespace ISignIn {
  export type Data = {
    emailOrUsername: string;
    password: string;
  };
}
