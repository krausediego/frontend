import { IEditCustomer } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class EditCustomer implements IEditCustomer {
  constructor(
    private readonly request: Request,
    private readonly getCustomersServiceUrl: string,
  ) {}

  public async editCustomer({ data, token }: IEditCustomer.Params): Promise<{
    errors: any[];
    data: { data: IEditCustomer.Data } | null;
  }> {
    try {
      const result = await this.request.put({
        uri: `${this.getCustomersServiceUrl}`,
        data,
        bearerToken: token,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
