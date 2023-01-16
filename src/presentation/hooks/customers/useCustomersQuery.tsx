import { ICustomers } from '@/domain/useCases';
import { useQuery } from 'react-query';

export const useCustomersQuery = (
  service: ICustomers,
  user_id: string,
  token: string,
) => {
  return useQuery(
    ['customers[]', user_id],
    async () => {
      return service.getCustomers({ user_id, token });
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
