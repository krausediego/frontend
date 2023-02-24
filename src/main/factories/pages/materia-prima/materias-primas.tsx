import { GetMateriasPrimas } from '@/data/useCases';
import { IMateriasPrimas } from '@/domain/useCases';
import { AxiosRequest } from '@/infra/request/axios-request';
import { AuthProvider } from '@/presentation/contexts';
import { MateriasPrimasPage } from '@/presentation/pages/MateriaPrima';

type MateriasPrimasProps = IMateriasPrimas;

export const MateriasPrimasPageFactory = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const httpRequest = new AxiosRequest();
  const getMateriasPrimasService = new GetMateriasPrimas(
    httpRequest,
    `${baseUrl}/get-all-materias-primas`,
  );
  const api: MateriasPrimasProps = {
    getMateriasPrimas: getMateriasPrimasService.getMateriasPrimas.bind(
      getMateriasPrimasService,
    ),
  };

  return (
    <AuthProvider>
      <MateriasPrimasPage materiasPrimasService={api} />
    </AuthProvider>
  );
};
