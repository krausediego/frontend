import { IGetCEP } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class GetCEP implements IGetCEP {
  constructor(
    private readonly request: Request,
    private readonly getCEPServiceUrl: string,
  ) {}

  public async getCEP({ cep }: IGetCEP.Params): Promise<{
    errors: any[];
    data: { data: IGetCEP.Data } | null;
  }> {
    try {
      const result = await this.request.get({
        uri: `${this.getCEPServiceUrl}/${cep}/json`,
      });

      return { errors: [], data: { data: result } || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
