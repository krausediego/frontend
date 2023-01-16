import { ISignIn } from '@/domain/useCases';
import { Request } from '../contracts';
import { errorHandler } from './helpers/error-handle';

export class SignIn implements ISignIn {
  constructor(
    private readonly request: Request,
    private readonly signInServiceUrl: string,
  ) {}

  public async signIn(data: ISignIn.Data): Promise<any> {
    try {
      const result = await this.request.post({
        uri: `${this.signInServiceUrl}`,
        data,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
