import { IMateriasPrimas } from '@/domain/useCases';
import { useQuery } from 'react-query';

export const useMateriasPrimasQuery = (
  getMateriasPrimasSerivce: IMateriasPrimas,
  user_id: string,
  token: string,
  search?: string,
) => {
  const queryKey = search
    ? ['materiasPrimas[]', user_id, search]
    : ['materiasPrimas[]', user_id];

  return useQuery(
    queryKey,
    async () => {
      return getMateriasPrimasSerivce.getMateriasPrimas({
        user_id,
        token,
        search,
      });
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
