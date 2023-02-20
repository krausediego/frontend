import { ICreateCustomer } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class CreateCustomer implements ICreateCustomer {
  constructor(
    private readonly request: Request,
    private readonly createCustomersServiceUrl: string,
  ) {}

  public async createCustomer({
    data,
    token,
  }: ICreateCustomer.Params): Promise<{
    errors: any[];
    data: ICreateCustomer.Data[] | null;
  }> {
    try {
      const result = await this.request.post({
        uri: `${this.createCustomersServiceUrl}`,
        data,
        bearerToken: token,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
