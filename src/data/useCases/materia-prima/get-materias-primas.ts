import { IMateriasPrimas } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class GetMateriasPrimas implements IMateriasPrimas {
  constructor(
    private readonly request: Request,
    private readonly getMateriasPrimasServiceUrl: string,
  ) {}

  public async getMateriasPrimas({
    user_id,
    token,
    search,
  }: IMateriasPrimas.Params): Promise<{
    errors: any[];
    data: { data: IMateriasPrimas.Data[] } | null;
  }> {
    try {
      const result = await this.request.get({
        uri: `${this.getMateriasPrimasServiceUrl}`,
        data: { user_id, search },
        bearerToken: token,
      });

      return { errors: [], data: { data: result } || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
