import { IDeleteCustomer } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class DeleteCustomer implements IDeleteCustomer {
  constructor(
    private readonly request: Request,
    private readonly deleteCustomersServiceUrl: string,
  ) {}

  public async deleteCustomer({
    data,
    token,
  }: IDeleteCustomer.Params): Promise<{
    errors: any[];
    data: { data: IDeleteCustomer.Data[] } | null;
  }> {
    try {
      const result = await this.request.delete({
        uri: `${this.deleteCustomersServiceUrl}`,
        data,
        bearerToken: token,
      });

      return { errors: [], data: { data: result } || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
