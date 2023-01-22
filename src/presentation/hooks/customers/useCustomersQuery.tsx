import { ICustomers } from '@/domain/useCases';
import { useQuery } from 'react-query';

export const useCustomersQuery = (
  service: ICustomers,
  user_id: string,
  token: string,
  search?: string,
) => {
  const queryKey = search
    ? ['customers[]', user_id, search]
    : ['customers[]', user_id];

  return useQuery(
    queryKey,
    async () => {
      return service.getCustomers({ user_id, token, search });
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
