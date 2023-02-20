import { IGetCustomer } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class GetCustomer implements IGetCustomer {
  constructor(
    private readonly request: Request,
    private readonly getCustomerServiceUrl: string,
  ) {}

  public async getCustomer({ token }: IGetCustomer.Params): Promise<{
    errors: any[];
    data: { data: IGetCustomer.Data } | null;
  }> {
    try {
      const result = await this.request.get({
        uri: `${this.getCustomerServiceUrl}`,
        bearerToken: token,
      });

      return { errors: [], data: { data: result } || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
