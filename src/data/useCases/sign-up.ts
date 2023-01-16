import { ISignUp } from '@/domain/useCases';
import { Request } from '../contracts';
import { errorHandler } from './helpers/error-handle';

export class SignUp implements ISignUp {
  constructor(
    private readonly request: Request,
    private readonly signUpServiceUrl: string,
  ) {}

  public async signUp(data: ISignUp.Data): Promise<any> {
    try {
      const result = await this.request.post({
        uri: `${this.signUpServiceUrl}`,
        data,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
