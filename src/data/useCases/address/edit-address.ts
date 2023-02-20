import { IEditAddress } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class EditAddress implements IEditAddress {
  constructor(
    private readonly request: Request,
    private readonly editAddressServiceUrl: string,
  ) {}

  public async editAddress({ data, token }: IEditAddress.Params): Promise<{
    errors: any[];
    data: { data: IEditAddress.Data } | null;
  }> {
    try {
      const result = await this.request.put({
        uri: `${this.editAddressServiceUrl}`,
        data,
        bearerToken: token,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
