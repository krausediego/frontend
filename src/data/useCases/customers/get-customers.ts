import { ICustomers } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class GetCustomers implements ICustomers {
  constructor(
    private readonly request: Request,
    private readonly getCustomersServiceUrl: string,
  ) {}

  public async getCustomers({
    user_id,
    token,
    search,
  }: ICustomers.Params): Promise<{
    errors: any[];
    data: ICustomers.Data[] | null;
  }> {
    try {
      const result = await this.request.get({
        uri: `${this.getCustomersServiceUrl}`,
        data: { user_id, search },
        bearerToken: token,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
