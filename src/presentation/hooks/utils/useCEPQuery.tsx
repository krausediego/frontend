import { IGetCEP } from '@/domain/useCases';
import { useQuery } from 'react-query';

type useCEPQueryProps = {
  getCEPService: IGetCEP;
  cep: string;
};

export const useCEPQuery = ({ getCEPService, cep }: useCEPQueryProps) => {
  return useQuery(
    ['customers'],
    async () => {
      const prepareCEP = cep.replace('.', '').replace('-', '');
      return getCEPService.getCEP({ cep: prepareCEP });
    },
    { enabled: cep.length === 10, cacheTime: 0 },
  );
};
