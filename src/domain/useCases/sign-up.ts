export interface ISignUp {
  signUp(data: ISignUp.Data): Promise<any>;
}

export namespace ISignUp {
  export type Data = {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
  };
}
