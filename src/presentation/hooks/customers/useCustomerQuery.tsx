import { IGetCustomer } from '@/domain/useCases';
import { useQuery } from 'react-query';

type useCustomerQueryProps = {
  getCustomerService: IGetCustomer;
  user_id: string;
  token: string;
  id?: string;
};

export const useCustomerQuery = ({
  getCustomerService,
  token,
  user_id,
  id,
}: useCustomerQueryProps) => {
  const queryKey = id ? ['customers', user_id, id] : ['customers', user_id];

  return useQuery(queryKey, async () => {
    return getCustomerService.getCustomer({ token });
  });
};
