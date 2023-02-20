import { ICreateAddress } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class CreateAddress implements ICreateAddress {
  constructor(
    private readonly request: Request,
    private readonly createAddressServiceUrl: string,
  ) {}

  public async createAddress({ data, token }: ICreateAddress.Params): Promise<{
    errors: any[];
    data: { data: ICreateAddress.Data } | null;
  }> {
    try {
      const result = await this.request.post({
        uri: `${this.createAddressServiceUrl}`,
        data,
        bearerToken: token,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
